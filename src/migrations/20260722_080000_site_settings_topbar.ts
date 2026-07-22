import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "site_settings"
      ADD COLUMN IF NOT EXISTS "topbar_phone" varchar DEFAULT '0-800-123-456' NOT NULL,
      ADD COLUMN IF NOT EXISTS "topbar_delivery_text" varchar DEFAULT 'Безкоштовна доставка від 5000 грн' NOT NULL;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "site_settings"
      DROP COLUMN IF EXISTS "topbar_phone",
      DROP COLUMN IF EXISTS "topbar_delivery_text";
  `)
}
