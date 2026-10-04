import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'
import {
  down as descriptionToText,
  up as descriptionToLexical,
} from './20260929_010000_category_description_lexical'

export async function up(args: MigrateUpArgs): Promise<void> {
  // Keep the full editor document before restoring the original plain description.
  await args.db.execute(sql`
    DO $$ BEGIN
      IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = 'category_locales'
          AND column_name = 'seo_text_rollback_backup'
      ) THEN
        ALTER TABLE "category_locales" RENAME COLUMN "seo_text_rollback_backup" TO "seo_text";
      ELSE
        ALTER TABLE "category_locales" ADD COLUMN "seo_text" jsonb;
        UPDATE "category_locales" SET "seo_text" = "description";
      END IF;
    END $$;
  `)
  await descriptionToText(args)
}

export async function down(args: MigrateDownArgs): Promise<void> {
  await descriptionToLexical(args)
  // Retain both fields' current values for a possible reapplication of this migration.
  await args.db.execute(sql`
    ALTER TABLE "category_locales" RENAME COLUMN "seo_text" TO "seo_text_rollback_backup";
  `)
}
