import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

const defaultContent = JSON.stringify({
  root: {
    children: [
      {
        children: [
          textNode(
            'V-NRG створює інноваційні апарати вакуумного масажу для професійного використання. Ми поєднуємо технології та практичний досвід, щоб допомогти спеціалістам працювати ефективніше і безпечніше.',
          ),
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'paragraph',
        version: 1,
      },
      {
        children: [
          listItem('Власні розробки та інженерні рішення', 1),
          listItem('Сертифіковане виробництво', 2),
          listItem('Підтримка спеціалістів та навчання', 3),
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        listType: 'number',
        start: 1,
        tag: 'ol',
        type: 'list',
        version: 1,
      },
    ],
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'root',
    version: 1,
  },
})

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "about_page_locales" ADD COLUMN IF NOT EXISTS "story_section_top_title" varchar;
    ALTER TABLE "about_page_locales" ADD COLUMN IF NOT EXISTS "story_section_title" varchar;
    ALTER TABLE "about_page_locales" ADD COLUMN IF NOT EXISTS "story_section_content" jsonb;
  `)

  await db.execute(sql`
    UPDATE "about_page_locales"
    SET
      "story_section_top_title" = COALESCE("story_section_top_title", 'Про нас'),
      "story_section_title" = COALESCE("story_section_title", 'Наша мета це розвивати професійну вакуумну терапію'),
      "story_section_content" = COALESCE("story_section_content", ${defaultContent}::jsonb);
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "about_page_locales" DROP COLUMN IF EXISTS "story_section_content";
    ALTER TABLE "about_page_locales" DROP COLUMN IF EXISTS "story_section_title";
    ALTER TABLE "about_page_locales" DROP COLUMN IF EXISTS "story_section_top_title";
  `)
}

function listItem(text: string, value: number) {
  return {
    children: [
      {
        children: [textNode(text)],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'paragraph',
        version: 1,
      },
    ],
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'listitem',
    value,
    version: 1,
  }
}

function textNode(text: string) {
  return { detail: 0, format: 0, mode: 'normal', style: '', text, type: 'text', version: 1 }
}
