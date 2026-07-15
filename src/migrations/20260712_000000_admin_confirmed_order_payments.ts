import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ BEGIN
      CREATE TYPE "public"."enum_orders_payment_approval_status" AS ENUM(
        'pending_admin',
        'confirmed',
        'rejected'
      );
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    ALTER TABLE "orders"
      ADD COLUMN IF NOT EXISTS "payment_approval_status" "public"."enum_orders_payment_approval_status" DEFAULT 'confirmed' NOT NULL;
    ALTER TABLE "orders" ADD COLUMN IF NOT EXISTS "confirmed_payment_at" timestamp(3) with time zone;
    ALTER TABLE "orders" ADD COLUMN IF NOT EXISTS "financial_phone" varchar;
    ALTER TABLE "orders" ADD COLUMN IF NOT EXISTS "parts_count" numeric DEFAULT 8;

    UPDATE "orders"
    SET "payment_approval_status" = 'pending_admin'
    WHERE "payment_method" IN ('card-online', 'monobank-parts')
      AND "payment_status" IN ('awaiting_payment', 'processing')
      AND "monobank" IS NULL;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "orders" DROP COLUMN IF EXISTS "payment_approval_status";
    ALTER TABLE "orders" DROP COLUMN IF EXISTS "confirmed_payment_at";
    ALTER TABLE "orders" DROP COLUMN IF EXISTS "financial_phone";
    ALTER TABLE "orders" DROP COLUMN IF EXISTS "parts_count";
    DROP TYPE IF EXISTS "public"."enum_orders_payment_approval_status";
  `)
}
