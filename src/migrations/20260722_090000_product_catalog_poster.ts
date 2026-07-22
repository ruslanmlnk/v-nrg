import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "poster_id" integer;

    DO $$ BEGIN
      ALTER TABLE "products"
      ADD CONSTRAINT "products_poster_id_media_id_fk"
      FOREIGN KEY ("poster_id")
      REFERENCES "public"."media"("id")
      ON DELETE set null
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE INDEX IF NOT EXISTS "products_poster_idx" ON "products" USING btree ("poster_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP INDEX IF EXISTS "products_poster_idx";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "poster_id";
  `)
}
