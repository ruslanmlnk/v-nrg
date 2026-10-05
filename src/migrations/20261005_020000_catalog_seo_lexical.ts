import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $migration$
    BEGIN
      IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = current_schema() AND table_name = 'catalog_page_locales'
          AND column_name = 'seo_text_rollback_backup'
      ) THEN
        ALTER TABLE "catalog_page_locales" RENAME COLUMN "seo_text_rollback_backup" TO "seo_text";
      ELSE
        ALTER TABLE "catalog_page_locales" ADD COLUMN "seo_text" jsonb;

        UPDATE "catalog_page_locales" SET "seo_text" = jsonb_build_object(
          'root', jsonb_build_object(
            'type', 'root', 'version', 1, 'format', '', 'indent', 0, 'direction', null,
            'children',
            CASE WHEN coalesce("seo_text_title", '') = '' THEN '[]'::jsonb ELSE
              jsonb_build_array(jsonb_build_object(
                'type', 'heading', 'tag', 'h2', 'version', 1, 'format', '',
                'indent', 0, 'direction', null,
                'children', jsonb_build_array(jsonb_build_object(
                  'type', 'text', 'version', 1, 'text', "seo_text_title",
                  'format', 0, 'detail', 0, 'mode', 'normal', 'style', ''
                ))
              )) END
            || CASE WHEN "seo_text_description" IS NULL THEN '[]'::jsonb ELSE (
              SELECT jsonb_agg(jsonb_build_object(
                'type', 'paragraph', 'version', 1, 'format', '', 'indent', 0,
                'direction', null, 'textFormat', 0, 'textStyle', '',
                'children', CASE WHEN line = '' THEN '[]'::jsonb ELSE
                  jsonb_build_array(jsonb_build_object(
                    'type', 'text', 'version', 1, 'text', line,
                    'format', 0, 'detail', 0, 'mode', 'normal', 'style', ''
                  )) END
              ) ORDER BY position)
              FROM regexp_split_to_table("seo_text_description", E'\\r\\n|\\r|\\n')
                WITH ORDINALITY AS lines(line, position)
            ) END
          )
        ) WHERE "seo_text_title" IS NOT NULL OR "seo_text_description" IS NOT NULL;
      END IF;
    END $migration$;
    -- Keep original columns so the migration never deletes existing text.
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  // Retain editor changes for reapplying the migration; old fields stay available.
  await db.execute(sql`
    ALTER TABLE "catalog_page_locales" RENAME COLUMN "seo_text" TO "seo_text_rollback_backup";
  `)
}
