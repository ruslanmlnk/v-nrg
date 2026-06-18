import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ BEGIN
      CREATE TYPE "public"."enum_social_networks_type" AS ENUM('instagram', 'facebook', 'telegram', 'whatsapp', 'custom');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE TABLE IF NOT EXISTS "social_networks" (
      "id" serial PRIMARY KEY NOT NULL,
      "type" "enum_social_networks_type" NOT NULL,
      "url" varchar NOT NULL,
      "icon_id" integer NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      CONSTRAINT "social_networks_type_unique" UNIQUE("type")
    );

    CREATE TABLE IF NOT EXISTS "social_networks_locales" (
      "label" varchar NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "contacts_rels" (
      "id" serial PRIMARY KEY NOT NULL,
      "order" integer,
      "parent_id" integer NOT NULL,
      "path" varchar NOT NULL,
      "social_networks_id" integer
    );

    CREATE TABLE IF NOT EXISTS "site_settings" (
      "id" serial PRIMARY KEY NOT NULL,
      "favicon_id" integer,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "site_settings_rels" (
      "id" serial PRIMARY KEY NOT NULL,
      "order" integer,
      "parent_id" integer NOT NULL,
      "path" varchar NOT NULL,
      "social_networks_id" integer
    );

    DO $$ BEGIN
      ALTER TABLE "social_networks"
      ADD CONSTRAINT "social_networks_icon_id_media_id_fk"
      FOREIGN KEY ("icon_id")
      REFERENCES "public"."media"("id")
      ON DELETE set null
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "social_networks_locales"
      ADD CONSTRAINT "social_networks_locales_parent_id_fk"
      FOREIGN KEY ("_parent_id")
      REFERENCES "public"."social_networks"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "contacts_rels"
      ADD CONSTRAINT "contacts_rels_parent_fk"
      FOREIGN KEY ("parent_id")
      REFERENCES "public"."contacts"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "contacts_rels"
      ADD CONSTRAINT "contacts_rels_social_networks_fk"
      FOREIGN KEY ("social_networks_id")
      REFERENCES "public"."social_networks"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "site_settings"
      ADD CONSTRAINT "site_settings_favicon_id_media_id_fk"
      FOREIGN KEY ("favicon_id")
      REFERENCES "public"."media"("id")
      ON DELETE set null
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "site_settings_rels"
      ADD CONSTRAINT "site_settings_rels_parent_fk"
      FOREIGN KEY ("parent_id")
      REFERENCES "public"."site_settings"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "site_settings_rels"
      ADD CONSTRAINT "site_settings_rels_social_networks_fk"
      FOREIGN KEY ("social_networks_id")
      REFERENCES "public"."social_networks"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE INDEX IF NOT EXISTS "social_networks_icon_idx" ON "social_networks" USING btree ("icon_id");
    CREATE INDEX IF NOT EXISTS "social_networks_updated_at_idx" ON "social_networks" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "social_networks_created_at_idx" ON "social_networks" USING btree ("created_at");
    CREATE UNIQUE INDEX IF NOT EXISTS "social_networks_locales_locale_parent_id_unique" ON "social_networks_locales" USING btree ("_locale", "_parent_id");
    CREATE INDEX IF NOT EXISTS "social_networks_locales_parent_id_idx" ON "social_networks_locales" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "social_networks_locales_locale_idx" ON "social_networks_locales" USING btree ("_locale");
    CREATE INDEX IF NOT EXISTS "contacts_rels_order_idx" ON "contacts_rels" USING btree ("order");
    CREATE INDEX IF NOT EXISTS "contacts_rels_parent_idx" ON "contacts_rels" USING btree ("parent_id");
    CREATE INDEX IF NOT EXISTS "contacts_rels_path_idx" ON "contacts_rels" USING btree ("path");
    CREATE INDEX IF NOT EXISTS "contacts_rels_social_networks_id_idx" ON "contacts_rels" USING btree ("social_networks_id");
    CREATE INDEX IF NOT EXISTS "site_settings_favicon_idx" ON "site_settings" USING btree ("favicon_id");
    CREATE INDEX IF NOT EXISTS "site_settings_updated_at_idx" ON "site_settings" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "site_settings_created_at_idx" ON "site_settings" USING btree ("created_at");
    CREATE INDEX IF NOT EXISTS "site_settings_rels_order_idx" ON "site_settings_rels" USING btree ("order");
    CREATE INDEX IF NOT EXISTS "site_settings_rels_parent_idx" ON "site_settings_rels" USING btree ("parent_id");
    CREATE INDEX IF NOT EXISTS "site_settings_rels_path_idx" ON "site_settings_rels" USING btree ("path");
    CREATE INDEX IF NOT EXISTS "site_settings_rels_social_networks_id_idx" ON "site_settings_rels" USING btree ("social_networks_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "site_settings_rels" CASCADE;
    DROP TABLE IF EXISTS "site_settings" CASCADE;
    DROP TABLE IF EXISTS "contacts_rels" CASCADE;
    DROP TABLE IF EXISTS "social_networks_locales" CASCADE;
    DROP TABLE IF EXISTS "social_networks" CASCADE;
    DROP TYPE IF EXISTS "public"."enum_social_networks_type";
  `)
}
