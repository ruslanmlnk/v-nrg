import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "products_compare_features" CASCADE;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "products_compare_features" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "label" varchar NOT NULL,
      "value" varchar NOT NULL
    );

    DO $$ BEGIN
      ALTER TABLE "products_compare_features"
      ADD CONSTRAINT "products_compare_features_parent_id_fk"
      FOREIGN KEY ("_parent_id")
      REFERENCES "public"."products"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE INDEX IF NOT EXISTS "products_compare_features_order_idx"
      ON "products_compare_features" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "products_compare_features_parent_id_idx"
      ON "products_compare_features" USING btree ("_parent_id");
  `)
}
