import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "applications" (
      "id" serial PRIMARY KEY NOT NULL,
      "source" varchar NOT NULL,
      "name" varchar NOT NULL,
      "email" varchar,
      "phone" varchar,
      "message" varchar,
      "status" varchar DEFAULT 'new' NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "dealer_applications" (
      "id" serial PRIMARY KEY NOT NULL,
      "account_id" integer NOT NULL,
      "company_name" varchar NOT NULL,
      "first_name" varchar NOT NULL,
      "last_name" varchar NOT NULL,
      "phone" varchar NOT NULL,
      "email" varchar NOT NULL,
      "city" varchar NOT NULL,
      "message" varchar,
      "status" varchar DEFAULT 'new' NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    DO $$ BEGIN ALTER TABLE "dealer_applications" ADD CONSTRAINT "dealer_applications_account_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE INDEX IF NOT EXISTS "applications_source_idx" ON "applications" ("source");
    CREATE INDEX IF NOT EXISTS "applications_status_idx" ON "applications" ("status");
    CREATE INDEX IF NOT EXISTS "applications_created_at_idx" ON "applications" ("created_at");
    CREATE INDEX IF NOT EXISTS "dealer_applications_account_idx" ON "dealer_applications" ("account_id");
    CREATE INDEX IF NOT EXISTS "dealer_applications_status_idx" ON "dealer_applications" ("status");
    CREATE INDEX IF NOT EXISTS "dealer_applications_created_at_idx" ON "dealer_applications" ("created_at");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "dealer_applications" CASCADE;
    DROP TABLE IF EXISTS "applications" CASCADE;
  `)
}
