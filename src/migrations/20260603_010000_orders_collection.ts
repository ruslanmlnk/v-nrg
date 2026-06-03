import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ BEGIN
      CREATE TYPE "public"."enum_orders_order_status" AS ENUM(
        'new',
        'processing',
        'shipped',
        'delivered',
        'cancelled'
      );
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_orders_payment_status" AS ENUM(
        'awaiting_payment',
        'processing',
        'paid',
        'failed',
        'refunded'
      );
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_orders_payment_method" AS ENUM(
        'card-online',
        'monobank-parts',
        'invoice',
        'cash-on-delivery'
      );
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE TABLE IF NOT EXISTS "orders" (
      "id" serial PRIMARY KEY NOT NULL,
      "order_number" varchar NOT NULL,
      "customer_id" integer,
      "first_name" varchar NOT NULL,
      "last_name" varchar NOT NULL,
      "phone" varchar NOT NULL,
      "customer_email" varchar NOT NULL,
      "order_status" "public"."enum_orders_order_status" DEFAULT 'new' NOT NULL,
      "payment_status" "public"."enum_orders_payment_status" DEFAULT 'awaiting_payment' NOT NULL,
      "payment_method" "public"."enum_orders_payment_method" NOT NULL,
      "total" numeric NOT NULL,
      "items" jsonb NOT NULL,
      "delivery" jsonb,
      "comment" varchar,
      "monobank" jsonb,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    DO $$ BEGIN
      ALTER TABLE "orders"
      ADD CONSTRAINT "orders_customer_id_users_id_fk"
      FOREIGN KEY ("customer_id")
      REFERENCES "public"."users"("id")
      ON DELETE set null
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE UNIQUE INDEX IF NOT EXISTS "orders_order_number_idx" ON "orders" USING btree ("order_number");
    CREATE INDEX IF NOT EXISTS "orders_customer_idx" ON "orders" USING btree ("customer_id");
    CREATE INDEX IF NOT EXISTS "orders_created_at_idx" ON "orders" USING btree ("created_at");
    CREATE INDEX IF NOT EXISTS "orders_updated_at_idx" ON "orders" USING btree ("updated_at");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "orders";
    DROP TYPE IF EXISTS "public"."enum_orders_payment_method";
    DROP TYPE IF EXISTS "public"."enum_orders_payment_status";
    DROP TYPE IF EXISTS "public"."enum_orders_order_status";
  `)
}
