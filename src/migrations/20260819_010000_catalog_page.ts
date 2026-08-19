import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "catalog_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "catalog_page_locales" (
      "seo_meta_title" varchar,
      "seo_meta_description" varchar,
      "seo_text_title" varchar,
      "seo_text_description" varchar,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );

    DO $$ BEGIN
      ALTER TABLE "catalog_page_locales"
      ADD CONSTRAINT "catalog_page_locales_parent_id_fk"
      FOREIGN KEY ("_parent_id")
      REFERENCES "public"."catalog_page"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE INDEX IF NOT EXISTS "catalog_page_updated_at_idx" ON "catalog_page" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "catalog_page_created_at_idx" ON "catalog_page" USING btree ("created_at");
    CREATE UNIQUE INDEX IF NOT EXISTS "catalog_page_locales_locale_parent_id_unique" ON "catalog_page_locales" USING btree ("_locale", "_parent_id");
    CREATE INDEX IF NOT EXISTS "catalog_page_locales_parent_id_idx" ON "catalog_page_locales" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "catalog_page_locales_locale_idx" ON "catalog_page_locales" USING btree ("_locale");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "catalog_page_locales" CASCADE;
    DROP TABLE IF EXISTS "catalog_page" CASCADE;
  `)
}
