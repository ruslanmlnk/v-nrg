import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "locations" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "country" varchar NOT NULL,
      "city" varchar NOT NULL,
      "address" varchar NOT NULL,
      "image_id" integer,
      "latitude" numeric NOT NULL,
      "longitude" numeric NOT NULL,
      "phone" varchar,
      "instagram" varchar,
      "sort_order" numeric DEFAULT 0,
      "is_active" boolean DEFAULT true,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    DO $$ BEGIN
      ALTER TABLE "locations"
      ADD CONSTRAINT "locations_image_id_media_id_fk"
      FOREIGN KEY ("image_id")
      REFERENCES "public"."media"("id")
      ON DELETE set null
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE INDEX IF NOT EXISTS "locations_image_idx" ON "locations" USING btree ("image_id");
    CREATE INDEX IF NOT EXISTS "locations_sort_order_idx" ON "locations" USING btree ("sort_order");
    CREATE INDEX IF NOT EXISTS "locations_is_active_idx" ON "locations" USING btree ("is_active");
    CREATE INDEX IF NOT EXISTS "locations_updated_at_idx" ON "locations" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "locations_created_at_idx" ON "locations" USING btree ("created_at");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "locations" CASCADE;
  `)
}
