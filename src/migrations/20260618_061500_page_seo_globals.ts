import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "home_locales" ADD COLUMN IF NOT EXISTS "seo_meta_title" varchar;
    ALTER TABLE "home_locales" ADD COLUMN IF NOT EXISTS "seo_meta_description" varchar;
    ALTER TABLE "training_locales" ADD COLUMN IF NOT EXISTS "seo_meta_title" varchar;
    ALTER TABLE "training_locales" ADD COLUMN IF NOT EXISTS "seo_meta_description" varchar;
    ALTER TABLE "contacts_locales" ADD COLUMN IF NOT EXISTS "seo_meta_title" varchar;
    ALTER TABLE "contacts_locales" ADD COLUMN IF NOT EXISTS "seo_meta_description" varchar;
    ALTER TABLE "articles_locales" ADD COLUMN IF NOT EXISTS "seo_meta_title" varchar;
    ALTER TABLE "articles_locales" ADD COLUMN IF NOT EXISTS "seo_meta_description" varchar;
    ALTER TABLE "legal_pages_locales" ADD COLUMN IF NOT EXISTS "seo_meta_title" varchar;
    ALTER TABLE "legal_pages_locales" ADD COLUMN IF NOT EXISTS "seo_meta_description" varchar;
    ALTER TABLE "products_locales" ADD COLUMN IF NOT EXISTS "seo_meta_title" varchar;
    ALTER TABLE "products_locales" ADD COLUMN IF NOT EXISTS "seo_meta_description" varchar;
    ALTER TABLE "category_locales" ADD COLUMN IF NOT EXISTS "seo_meta_title" varchar;
    ALTER TABLE "category_locales" ADD COLUMN IF NOT EXISTS "seo_meta_description" varchar;

    CREATE TABLE IF NOT EXISTS "about_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "about_page_locales" (
      "seo_meta_title" varchar,
      "seo_meta_description" varchar,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "review_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "review_page_locales" (
      "seo_meta_title" varchar,
      "seo_meta_description" varchar,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "blog_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "blog_page_locales" (
      "seo_meta_title" varchar,
      "seo_meta_description" varchar,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );

    DO $$ BEGIN
      ALTER TABLE "about_page_locales"
      ADD CONSTRAINT "about_page_locales_parent_id_fk"
      FOREIGN KEY ("_parent_id")
      REFERENCES "public"."about_page"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "review_page_locales"
      ADD CONSTRAINT "review_page_locales_parent_id_fk"
      FOREIGN KEY ("_parent_id")
      REFERENCES "public"."review_page"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "blog_page_locales"
      ADD CONSTRAINT "blog_page_locales_parent_id_fk"
      FOREIGN KEY ("_parent_id")
      REFERENCES "public"."blog_page"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE INDEX IF NOT EXISTS "about_page_updated_at_idx" ON "about_page" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "about_page_created_at_idx" ON "about_page" USING btree ("created_at");
    CREATE UNIQUE INDEX IF NOT EXISTS "about_page_locales_locale_parent_id_unique" ON "about_page_locales" USING btree ("_locale", "_parent_id");
    CREATE INDEX IF NOT EXISTS "about_page_locales_parent_id_idx" ON "about_page_locales" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "about_page_locales_locale_idx" ON "about_page_locales" USING btree ("_locale");

    CREATE INDEX IF NOT EXISTS "review_page_updated_at_idx" ON "review_page" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "review_page_created_at_idx" ON "review_page" USING btree ("created_at");
    CREATE UNIQUE INDEX IF NOT EXISTS "review_page_locales_locale_parent_id_unique" ON "review_page_locales" USING btree ("_locale", "_parent_id");
    CREATE INDEX IF NOT EXISTS "review_page_locales_parent_id_idx" ON "review_page_locales" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "review_page_locales_locale_idx" ON "review_page_locales" USING btree ("_locale");

    CREATE INDEX IF NOT EXISTS "blog_page_updated_at_idx" ON "blog_page" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "blog_page_created_at_idx" ON "blog_page" USING btree ("created_at");
    CREATE UNIQUE INDEX IF NOT EXISTS "blog_page_locales_locale_parent_id_unique" ON "blog_page_locales" USING btree ("_locale", "_parent_id");
    CREATE INDEX IF NOT EXISTS "blog_page_locales_parent_id_idx" ON "blog_page_locales" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "blog_page_locales_locale_idx" ON "blog_page_locales" USING btree ("_locale");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "blog_page_locales" CASCADE;
    DROP TABLE IF EXISTS "blog_page" CASCADE;
    DROP TABLE IF EXISTS "review_page_locales" CASCADE;
    DROP TABLE IF EXISTS "review_page" CASCADE;
    DROP TABLE IF EXISTS "about_page_locales" CASCADE;
    DROP TABLE IF EXISTS "about_page" CASCADE;

    ALTER TABLE "category_locales" DROP COLUMN IF EXISTS "seo_meta_description";
    ALTER TABLE "category_locales" DROP COLUMN IF EXISTS "seo_meta_title";
    ALTER TABLE "products_locales" DROP COLUMN IF EXISTS "seo_meta_description";
    ALTER TABLE "products_locales" DROP COLUMN IF EXISTS "seo_meta_title";
    ALTER TABLE "legal_pages_locales" DROP COLUMN IF EXISTS "seo_meta_description";
    ALTER TABLE "legal_pages_locales" DROP COLUMN IF EXISTS "seo_meta_title";
    ALTER TABLE "articles_locales" DROP COLUMN IF EXISTS "seo_meta_description";
    ALTER TABLE "articles_locales" DROP COLUMN IF EXISTS "seo_meta_title";
    ALTER TABLE "contacts_locales" DROP COLUMN IF EXISTS "seo_meta_description";
    ALTER TABLE "contacts_locales" DROP COLUMN IF EXISTS "seo_meta_title";
    ALTER TABLE "training_locales" DROP COLUMN IF EXISTS "seo_meta_description";
    ALTER TABLE "training_locales" DROP COLUMN IF EXISTS "seo_meta_title";
    ALTER TABLE "home_locales" DROP COLUMN IF EXISTS "seo_meta_description";
    ALTER TABLE "home_locales" DROP COLUMN IF EXISTS "seo_meta_title";
  `)
}
