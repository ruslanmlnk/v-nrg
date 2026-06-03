import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "dealer_discount_percent" numeric DEFAULT 0;

    UPDATE "users"
    SET "dealer_discount_percent" = 0
    WHERE "dealer_discount_percent" IS NULL;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "users" DROP COLUMN IF EXISTS "dealer_discount_percent";
  `)
}
