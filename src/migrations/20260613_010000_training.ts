import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "training_categories" (
      "id" serial PRIMARY KEY NOT NULL,
      "title" varchar NOT NULL,
      "sort_order" numeric DEFAULT 0,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      CONSTRAINT "training_categories_title_unique" UNIQUE("title")
    );

    CREATE TABLE IF NOT EXISTS "training_videos" (
      "id" serial PRIMARY KEY NOT NULL,
      "title" varchar NOT NULL,
      "description" varchar NOT NULL,
      "category_id" integer NOT NULL,
      "poster_id" integer NOT NULL,
      "video_id" integer NOT NULL,
      "sort_order" numeric DEFAULT 0,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "training" (
      "id" serial PRIMARY KEY NOT NULL,
      "title" varchar NOT NULL,
      "description" varchar NOT NULL,
      "formats_title" varchar NOT NULL,
      "formats_subtitle" varchar NOT NULL,
      "video_instructions_title" varchar NOT NULL,
      "video_instructions_subtitle" varchar NOT NULL,
      "faq_title" varchar NOT NULL,
      "faq_subtitle" varchar NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "training_formats_cards" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "icon_id" integer NOT NULL,
      "title" varchar NOT NULL,
      "description" varchar NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "training_faq_items" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "question" varchar NOT NULL,
      "answer" varchar NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "training_rels" (
      "id" serial PRIMARY KEY NOT NULL,
      "order" integer,
      "parent_id" integer NOT NULL,
      "path" varchar NOT NULL,
      "media_id" integer
    );

    DO $$ BEGIN ALTER TABLE "training_videos" ADD CONSTRAINT "training_videos_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."training_categories"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
    DO $$ BEGIN ALTER TABLE "training_videos" ADD CONSTRAINT "training_videos_poster_id_fk" FOREIGN KEY ("poster_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
    DO $$ BEGIN ALTER TABLE "training_videos" ADD CONSTRAINT "training_videos_video_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
    DO $$ BEGIN ALTER TABLE "training_formats_cards" ADD CONSTRAINT "training_formats_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."training"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
    DO $$ BEGIN ALTER TABLE "training_formats_cards" ADD CONSTRAINT "training_formats_cards_icon_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
    DO $$ BEGIN ALTER TABLE "training_faq_items" ADD CONSTRAINT "training_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."training"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
    DO $$ BEGIN ALTER TABLE "training_rels" ADD CONSTRAINT "training_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."training"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;
    DO $$ BEGIN ALTER TABLE "training_rels" ADD CONSTRAINT "training_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE INDEX IF NOT EXISTS "training_categories_sort_order_idx" ON "training_categories" ("sort_order");
    CREATE INDEX IF NOT EXISTS "training_videos_category_idx" ON "training_videos" ("category_id");
    CREATE INDEX IF NOT EXISTS "training_videos_poster_idx" ON "training_videos" ("poster_id");
    CREATE INDEX IF NOT EXISTS "training_videos_video_idx" ON "training_videos" ("video_id");
    CREATE INDEX IF NOT EXISTS "training_videos_sort_order_idx" ON "training_videos" ("sort_order");
    CREATE INDEX IF NOT EXISTS "training_formats_cards_order_idx" ON "training_formats_cards" ("_order");
    CREATE INDEX IF NOT EXISTS "training_formats_cards_parent_id_idx" ON "training_formats_cards" ("_parent_id");
    CREATE INDEX IF NOT EXISTS "training_faq_items_order_idx" ON "training_faq_items" ("_order");
    CREATE INDEX IF NOT EXISTS "training_faq_items_parent_id_idx" ON "training_faq_items" ("_parent_id");
    CREATE INDEX IF NOT EXISTS "training_rels_order_idx" ON "training_rels" ("order");
    CREATE INDEX IF NOT EXISTS "training_rels_parent_idx" ON "training_rels" ("parent_id");
    CREATE INDEX IF NOT EXISTS "training_rels_path_idx" ON "training_rels" ("path");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "training_rels" CASCADE;
    DROP TABLE IF EXISTS "training_faq_items" CASCADE;
    DROP TABLE IF EXISTS "training_formats_cards" CASCADE;
    DROP TABLE IF EXISTS "training" CASCADE;
    DROP TABLE IF EXISTS "training_videos" CASCADE;
    DROP TABLE IF EXISTS "training_categories" CASCADE;
  `)
}
