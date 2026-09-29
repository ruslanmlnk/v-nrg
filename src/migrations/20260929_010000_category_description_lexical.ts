import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE FUNCTION pg_temp.category_description_to_lexical(value text)
    RETURNS jsonb LANGUAGE sql IMMUTABLE STRICT AS $fn$
      SELECT jsonb_build_object('root', jsonb_build_object(
        'type', 'root', 'version', 1, 'format', '', 'indent', 0, 'direction', null,
        'children', (
          SELECT jsonb_agg(jsonb_build_object(
            'type', 'paragraph', 'version', 1, 'format', '', 'indent', 0,
            'direction', null, 'textFormat', 0, 'textStyle', '',
            'children', CASE WHEN line = '' THEN '[]'::jsonb ELSE
              jsonb_build_array(jsonb_build_object(
                'type', 'text', 'version', 1, 'text', line,
                'format', 0, 'detail', 0, 'mode', 'normal', 'style', ''
              )) END
          ) ORDER BY position)
          FROM regexp_split_to_table(value, E'\\r\\n|\\r|\\n')
            WITH ORDINALITY AS lines(line, position)
        )
      ));
    $fn$;

    -- Convert every locale in place; NULL descriptions remain NULL.
    ALTER TABLE "category_locales" ALTER COLUMN "description" TYPE jsonb
      USING pg_temp.category_description_to_lexical("description");

    DROP FUNCTION pg_temp.category_description_to_lexical(text);
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    CREATE FUNCTION pg_temp.category_description_to_text(value jsonb)
    RETURNS text LANGUAGE sql IMMUTABLE STRICT AS $fn$
      SELECT coalesce(string_agg(
        coalesce((
          SELECT string_agg(node #>> '{}', '' ORDER BY position)
          FROM jsonb_path_query(block, 'strict $.** ? (@.type == "text").text')
            WITH ORDINALITY AS nodes(node, position)
        ), ''), E'\\n' ORDER BY position
      ), '')
      FROM jsonb_array_elements(value->'root'->'children')
        WITH ORDINALITY AS blocks(block, position);
    $fn$;

    -- Returning to the old plain-text field necessarily removes rich formatting.
    ALTER TABLE "category_locales" ALTER COLUMN "description" TYPE varchar
      USING pg_temp.category_description_to_text("description");

    DROP FUNCTION pg_temp.category_description_to_text(jsonb);
  `)
}
