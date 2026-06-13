import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "contacts" (
      "id" serial PRIMARY KEY NOT NULL,
      "title" varchar NOT NULL,
      "description" varchar NOT NULL,
      "phone" varchar NOT NULL,
      "email" varchar NOT NULL,
      "address" varchar NOT NULL,
      "form_title" varchar NOT NULL,
      "form_description" varchar NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "contacts_form_social_networks" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "label" varchar NOT NULL,
      "icon_id" integer NOT NULL,
      "url" varchar NOT NULL
    );

    DO $$ BEGIN ALTER TABLE "contacts_form_social_networks" ADD CONSTRAINT "contacts_form_social_networks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
    DO $$ BEGIN ALTER TABLE "contacts_form_social_networks" ADD CONSTRAINT "contacts_form_social_networks_icon_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE INDEX IF NOT EXISTS "contacts_form_social_networks_order_idx" ON "contacts_form_social_networks" ("_order");
    CREATE INDEX IF NOT EXISTS "contacts_form_social_networks_parent_id_idx" ON "contacts_form_social_networks" ("_parent_id");
    CREATE INDEX IF NOT EXISTS "contacts_form_social_networks_icon_idx" ON "contacts_form_social_networks" ("icon_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "contacts_form_social_networks" CASCADE;
    DROP TABLE IF EXISTS "contacts" CASCADE;
  `)
}
