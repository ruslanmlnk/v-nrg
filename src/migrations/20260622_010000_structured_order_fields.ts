import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ BEGIN
      CREATE TYPE "public"."enum_orders_delivery_method" AS ENUM(
        'nova-poshta',
        'courier',
        'pickup'
      );
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE TABLE IF NOT EXISTS "orders_items" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "product_id" integer,
      "title" varchar NOT NULL,
      "quantity" numeric NOT NULL,
      "price" numeric NOT NULL,
      "total" numeric NOT NULL
    );

    DO $$ BEGIN
      ALTER TABLE "orders_items"
      ADD CONSTRAINT "orders_items_parent_id_fk"
      FOREIGN KEY ("_parent_id") REFERENCES "public"."orders"("id")
      ON DELETE cascade ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "orders_items"
      ADD CONSTRAINT "orders_items_product_id_products_id_fk"
      FOREIGN KEY ("product_id") REFERENCES "public"."products"("id")
      ON DELETE set null ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE INDEX IF NOT EXISTS "orders_items_order_idx" ON "orders_items" USING btree("_order");
    CREATE INDEX IF NOT EXISTS "orders_items_parent_id_idx" ON "orders_items" USING btree("_parent_id");
    CREATE INDEX IF NOT EXISTS "orders_items_product_idx" ON "orders_items" USING btree("product_id");

    ALTER TABLE "orders" ADD COLUMN IF NOT EXISTS "delivery_method" "public"."enum_orders_delivery_method";
    ALTER TABLE "orders" ADD COLUMN IF NOT EXISTS "delivery_pickup_point" varchar;

    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = 'orders' AND column_name = 'items'
      ) THEN
        EXECUTE $migration$
          INSERT INTO "orders_items" (
            "_order", "_parent_id", "id", "product_id", "title", "quantity", "price", "total"
          )
          SELECT
            item.ordinality - 1,
            orders.id,
            md5(orders.id::text || ':' || item.ordinality::text || ':' || item.value::text),
            products.id,
            COALESCE(NULLIF(item.value->>'title', ''), products.title, 'Товар'),
            GREATEST(COALESCE((item.value->>'quantity')::numeric, 1), 1),
            GREATEST(COALESCE((item.value->>'price')::numeric, 0), 0),
            GREATEST(COALESCE((item.value->>'total')::numeric, 0), 0)
          FROM "orders" orders
          CROSS JOIN LATERAL jsonb_array_elements(
            CASE WHEN jsonb_typeof(orders.items) = 'array' THEN orders.items ELSE '[]'::jsonb END
          ) WITH ORDINALITY AS item(value, ordinality)
          LEFT JOIN "products" products
            ON products.slug = item.value->>'productId'
            OR (
              item.value->>'productId' ~ '^[0-9]+$'
              AND products.id = (item.value->>'productId')::integer
            )
          ON CONFLICT ("id") DO NOTHING
        $migration$;

        ALTER TABLE "orders" ALTER COLUMN "items" SET DEFAULT '[]'::jsonb;
        ALTER TABLE "orders" ALTER COLUMN "items" DROP NOT NULL;
      END IF;

      IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = 'orders' AND column_name = 'delivery'
      ) THEN
        EXECUTE $migration$
          UPDATE "orders"
          SET
            "delivery_method" = CASE
              WHEN delivery->>'method' IN ('nova-poshta', 'courier', 'pickup')
                THEN (delivery->>'method')::"public"."enum_orders_delivery_method"
              ELSE NULL
            END,
            "delivery_pickup_point" = NULLIF(delivery->>'pickupPoint', '')
          WHERE delivery IS NOT NULL
        $migration$;
      END IF;
    END $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = 'orders' AND column_name = 'items'
      ) THEN
        UPDATE "orders"
        SET "items" = COALESCE(
          (
            SELECT jsonb_agg(
              jsonb_build_object(
                'productId', COALESCE(products.slug, orders_items.product_id::text),
                'title', orders_items.title,
                'quantity', orders_items.quantity,
                'price', orders_items.price,
                'total', orders_items.total
              ) ORDER BY orders_items._order
            )
            FROM "orders_items" orders_items
            LEFT JOIN "products" products ON products.id = orders_items.product_id
            WHERE orders_items._parent_id = orders.id
          ),
          '[]'::jsonb
        );

        ALTER TABLE "orders" ALTER COLUMN "items" DROP DEFAULT;
        ALTER TABLE "orders" ALTER COLUMN "items" SET NOT NULL;
      END IF;

      IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = 'orders' AND column_name = 'delivery'
      ) THEN
        UPDATE "orders"
        SET "delivery" = jsonb_strip_nulls(
          jsonb_build_object(
            'method', delivery_method,
            'pickupPoint', delivery_pickup_point
          )
        )
        WHERE delivery_method IS NOT NULL OR delivery_pickup_point IS NOT NULL;
      END IF;
    END $$;

    DROP TABLE IF EXISTS "orders_items";
    ALTER TABLE "orders" DROP COLUMN IF EXISTS "delivery_method";
    ALTER TABLE "orders" DROP COLUMN IF EXISTS "delivery_pickup_point";
    DROP TYPE IF EXISTS "public"."enum_orders_delivery_method";
  `)
}
