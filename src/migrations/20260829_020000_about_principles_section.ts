import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "about_page_locales" ADD COLUMN IF NOT EXISTS "principles_section_title" varchar;
    ALTER TABLE "about_page_locales" ADD COLUMN IF NOT EXISTS "principles_section_subtitle" varchar;

    UPDATE "about_page_locales"
    SET
      "principles_section_title" = COALESCE(
        "principles_section_title",
        CASE WHEN "_locale" = 'en' THEN 'The foundation of the V-NRG brand' ELSE 'Основа бренду V-NRG' END
      ),
      "principles_section_subtitle" = COALESCE(
        "principles_section_subtitle",
        CASE WHEN "_locale" = 'en' THEN 'Our principles' ELSE 'Наші принципи' END
      );

    ALTER TABLE "about_page_locales" ALTER COLUMN "principles_section_title" SET NOT NULL;
    ALTER TABLE "about_page_locales" ALTER COLUMN "principles_section_subtitle" SET NOT NULL;

    CREATE TABLE IF NOT EXISTS "about_page_principles_section_cards" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "icon_id" integer NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "about_page_principles_section_cards_locales" (
      "title" varchar NOT NULL,
      "description" varchar NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" varchar NOT NULL
    );

    DO $$ BEGIN
      ALTER TABLE "about_page_principles_section_cards"
      ADD CONSTRAINT "about_page_principles_section_cards_parent_id_fk"
      FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id")
      ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "about_page_principles_section_cards"
      ADD CONSTRAINT "about_page_principles_section_cards_icon_id_media_id_fk"
      FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id")
      ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "about_page_principles_section_cards_locales"
      ADD CONSTRAINT "about_page_principles_section_cards_locales_parent_id_fk"
      FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page_principles_section_cards"("id")
      ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null;
    END $$;

    CREATE INDEX IF NOT EXISTS "about_page_principles_section_cards_order_idx" ON "about_page_principles_section_cards" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "about_page_principles_section_cards_parent_id_idx" ON "about_page_principles_section_cards" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "about_page_principles_section_cards_icon_idx" ON "about_page_principles_section_cards" USING btree ("icon_id");
    CREATE UNIQUE INDEX IF NOT EXISTS "about_page_principles_section_cards_locales_locale_parent_id_unique" ON "about_page_principles_section_cards_locales" USING btree ("_locale", "_parent_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "about_page_principles_section_cards_locales" CASCADE;
    DROP TABLE IF EXISTS "about_page_principles_section_cards" CASCADE;
    ALTER TABLE "about_page_locales" DROP COLUMN IF EXISTS "principles_section_subtitle";
    ALTER TABLE "about_page_locales" DROP COLUMN IF EXISTS "principles_section_title";
  `)
}
