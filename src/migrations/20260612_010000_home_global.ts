import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "home" (
      "id" serial PRIMARY KEY NOT NULL,
      "hero_title" varchar NOT NULL,
      "hero_description" varchar NOT NULL,
      "hero_image_id" integer NOT NULL,
      "how_it_work_title" varchar NOT NULL,
      "how_it_work_subtitle" varchar NOT NULL,
      "model_comparison_title" varchar NOT NULL,
      "model_comparison_subtitle" varchar NOT NULL,
      "certificates_section_title" varchar NOT NULL,
      "certificates_section_subtitle" varchar NOT NULL,
      "training_section_title" varchar NOT NULL,
      "training_section_subtitle" varchar NOT NULL,
      "training_section_video_poster_id" integer NOT NULL,
      "training_section_video_file_id" integer NOT NULL,
      "reviews_section_title" varchar NOT NULL,
      "reviews_section_subtitle" varchar NOT NULL,
      "faq_section_title" varchar NOT NULL,
      "faq_section_subtitle" varchar NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "home_how_it_work_cards" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "icon_id" integer NOT NULL,
      "title" varchar NOT NULL,
      "description" varchar NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "home_before_after" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "before_id" integer NOT NULL,
      "after_id" integer NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "home_training_section_cards" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "icon_id" integer NOT NULL,
      "title" varchar NOT NULL,
      "description" varchar NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "home_faq_section_items" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "question" varchar NOT NULL,
      "answer" varchar NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "home_rels" (
      "id" serial PRIMARY KEY NOT NULL,
      "order" integer,
      "parent_id" integer NOT NULL,
      "path" varchar NOT NULL,
      "media_id" integer,
      "products_id" integer,
      "reviews_id" integer
    );

    DO $$ BEGIN
      ALTER TABLE "home"
      ADD CONSTRAINT "home_hero_image_id_media_id_fk"
      FOREIGN KEY ("hero_image_id")
      REFERENCES "public"."media"("id")
      ON DELETE set null
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home"
      ADD CONSTRAINT "home_training_section_video_poster_id_media_id_fk"
      FOREIGN KEY ("training_section_video_poster_id")
      REFERENCES "public"."media"("id")
      ON DELETE set null
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home"
      ADD CONSTRAINT "home_training_section_video_file_id_media_id_fk"
      FOREIGN KEY ("training_section_video_file_id")
      REFERENCES "public"."media"("id")
      ON DELETE set null
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home_before_after"
      ADD CONSTRAINT "home_before_after_before_id_media_id_fk"
      FOREIGN KEY ("before_id")
      REFERENCES "public"."media"("id")
      ON DELETE set null
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home_training_section_cards"
      ADD CONSTRAINT "home_training_section_cards_icon_id_media_id_fk"
      FOREIGN KEY ("icon_id")
      REFERENCES "public"."media"("id")
      ON DELETE set null
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home_faq_section_items"
      ADD CONSTRAINT "home_faq_section_items_parent_id_fk"
      FOREIGN KEY ("_parent_id")
      REFERENCES "public"."home"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home_training_section_cards"
      ADD CONSTRAINT "home_training_section_cards_parent_id_fk"
      FOREIGN KEY ("_parent_id")
      REFERENCES "public"."home"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home_before_after"
      ADD CONSTRAINT "home_before_after_after_id_media_id_fk"
      FOREIGN KEY ("after_id")
      REFERENCES "public"."media"("id")
      ON DELETE set null
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home_rels"
      ADD CONSTRAINT "home_rels_reviews_fk"
      FOREIGN KEY ("reviews_id")
      REFERENCES "public"."reviews"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home_before_after"
      ADD CONSTRAINT "home_before_after_parent_id_fk"
      FOREIGN KEY ("_parent_id")
      REFERENCES "public"."home"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home_rels"
      ADD CONSTRAINT "home_rels_parent_fk"
      FOREIGN KEY ("parent_id")
      REFERENCES "public"."home"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home_rels"
      ADD CONSTRAINT "home_rels_media_fk"
      FOREIGN KEY ("media_id")
      REFERENCES "public"."media"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home_rels"
      ADD CONSTRAINT "home_rels_products_fk"
      FOREIGN KEY ("products_id")
      REFERENCES "public"."products"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home_how_it_work_cards"
      ADD CONSTRAINT "home_how_it_work_cards_icon_id_media_id_fk"
      FOREIGN KEY ("icon_id")
      REFERENCES "public"."media"("id")
      ON DELETE set null
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "home_how_it_work_cards"
      ADD CONSTRAINT "home_how_it_work_cards_parent_id_fk"
      FOREIGN KEY ("_parent_id")
      REFERENCES "public"."home"("id")
      ON DELETE cascade
      ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE INDEX IF NOT EXISTS "home_hero_image_idx" ON "home" USING btree ("hero_image_id");
    CREATE INDEX IF NOT EXISTS "home_training_section_video_poster_idx" ON "home" USING btree ("training_section_video_poster_id");
    CREATE INDEX IF NOT EXISTS "home_training_section_video_file_idx" ON "home" USING btree ("training_section_video_file_id");
    CREATE INDEX IF NOT EXISTS "home_updated_at_idx" ON "home" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "home_created_at_idx" ON "home" USING btree ("created_at");
    CREATE INDEX IF NOT EXISTS "home_how_it_work_cards_order_idx" ON "home_how_it_work_cards" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "home_how_it_work_cards_parent_id_idx" ON "home_how_it_work_cards" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "home_how_it_work_cards_icon_idx" ON "home_how_it_work_cards" USING btree ("icon_id");
    CREATE INDEX IF NOT EXISTS "home_before_after_order_idx" ON "home_before_after" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "home_before_after_parent_id_idx" ON "home_before_after" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "home_before_after_before_idx" ON "home_before_after" USING btree ("before_id");
    CREATE INDEX IF NOT EXISTS "home_before_after_after_idx" ON "home_before_after" USING btree ("after_id");
    CREATE INDEX IF NOT EXISTS "home_training_section_cards_order_idx" ON "home_training_section_cards" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "home_training_section_cards_parent_id_idx" ON "home_training_section_cards" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "home_training_section_cards_icon_idx" ON "home_training_section_cards" USING btree ("icon_id");
    CREATE INDEX IF NOT EXISTS "home_faq_section_items_order_idx" ON "home_faq_section_items" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "home_faq_section_items_parent_id_idx" ON "home_faq_section_items" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "home_rels_order_idx" ON "home_rels" USING btree ("order");
    CREATE INDEX IF NOT EXISTS "home_rels_parent_idx" ON "home_rels" USING btree ("parent_id");
    CREATE INDEX IF NOT EXISTS "home_rels_path_idx" ON "home_rels" USING btree ("path");
    CREATE INDEX IF NOT EXISTS "home_rels_media_id_idx" ON "home_rels" USING btree ("media_id");
    CREATE INDEX IF NOT EXISTS "home_rels_products_id_idx" ON "home_rels" USING btree ("products_id");
    CREATE INDEX IF NOT EXISTS "home_rels_reviews_id_idx" ON "home_rels" USING btree ("reviews_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "home_rels" CASCADE;
    DROP TABLE IF EXISTS "home_faq_section_items" CASCADE;
    DROP TABLE IF EXISTS "home_training_section_cards" CASCADE;
    DROP TABLE IF EXISTS "home_before_after" CASCADE;
    DROP TABLE IF EXISTS "home_how_it_work_cards" CASCADE;
    DROP TABLE IF EXISTS "home" CASCADE;
  `)
}
