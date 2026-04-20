import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ BEGIN
      CREATE TYPE "public"."enum_products_category" AS ENUM(
        'vacuum',
        'physiotherapy',
        'components',
        'materials',
        'accessories',
        'chairs'
      );
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "slug" varchar;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "category" "public"."enum_products_category" DEFAULT 'vacuum';
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "maniples" numeric;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "power_watts" numeric;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "details" varchar;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "short_description" varchar;

    UPDATE "products"
    SET "slug" = concat('product-', "id")
    WHERE "slug" IS NULL OR "slug" = '';

    UPDATE "products"
    SET "category" = 'vacuum'
    WHERE "category" IS NULL;

    ALTER TABLE "products" ALTER COLUMN "slug" SET NOT NULL;
    ALTER TABLE "products" ALTER COLUMN "category" SET NOT NULL;

    CREATE TABLE IF NOT EXISTS "products_list_features" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "feature" varchar NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "products_compare_features" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "label" varchar NOT NULL,
      "value" varchar NOT NULL
    );

    DO $$ BEGIN
      ALTER TABLE "products_list_features"
      ADD CONSTRAINT "products_list_features_parent_id_fk"
      FOREIGN KEY ("_parent_id")
      REFERENCES "public"."products"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "products_compare_features"
      ADD CONSTRAINT "products_compare_features_parent_id_fk"
      FOREIGN KEY ("_parent_id")
      REFERENCES "public"."products"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE UNIQUE INDEX IF NOT EXISTS "products_slug_idx" ON "products" USING btree ("slug");
    CREATE INDEX IF NOT EXISTS "products_category_idx" ON "products" USING btree ("category");
    CREATE INDEX IF NOT EXISTS "products_list_features_order_idx" ON "products_list_features" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "products_list_features_parent_id_idx" ON "products_list_features" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "products_compare_features_order_idx" ON "products_compare_features" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "products_compare_features_parent_id_idx" ON "products_compare_features" USING btree ("_parent_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "products_compare_features" CASCADE;
    DROP TABLE IF EXISTS "products_list_features" CASCADE;

    DROP INDEX IF EXISTS "products_category_idx";
    DROP INDEX IF EXISTS "products_slug_idx";

    ALTER TABLE "products" DROP COLUMN IF EXISTS "short_description";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "details";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "power_watts";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "maniples";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "category";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "slug";

    DROP TYPE IF EXISTS "public"."enum_products_category";
  `)
}
