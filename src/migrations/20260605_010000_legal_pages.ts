import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "legal_pages" (
      "id" serial PRIMARY KEY NOT NULL,
      "title" varchar NOT NULL,
      "slug" varchar NOT NULL,
      "content" jsonb,
      "content_markdown" varchar,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE UNIQUE INDEX IF NOT EXISTS "legal_pages_slug_idx" ON "legal_pages" USING btree ("slug");
    CREATE INDEX IF NOT EXISTS "legal_pages_updated_at_idx" ON "legal_pages" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "legal_pages_created_at_idx" ON "legal_pages" USING btree ("created_at");

    ALTER TABLE "legal_pages" ADD COLUMN IF NOT EXISTS "content" jsonb;
    ALTER TABLE "legal_pages" ALTER COLUMN "content_markdown" DROP NOT NULL;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "legal_pages";
  `)
}
