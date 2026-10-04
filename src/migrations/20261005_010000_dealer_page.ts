import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE "dealer_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    );
    CREATE TABLE "dealer_page_locales" (
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL REFERENCES "dealer_page"("id") ON DELETE cascade,
      "seo_meta_title" varchar, "seo_meta_description" varchar,
      "hero_title" varchar, "hero_description" varchar,
      "application_intro_title" varchar, "application_intro_description" varchar
    );
    CREATE UNIQUE INDEX "dealer_page_locales_locale_parent_id_unique" ON "dealer_page_locales" ("_locale", "_parent_id");
    CREATE TABLE "dealer_page_benefits" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL REFERENCES "dealer_page"("id") ON DELETE cascade,
      "id" varchar PRIMARY KEY NOT NULL
    );
    CREATE INDEX "dealer_page_benefits_order_idx" ON "dealer_page_benefits" ("_order");
    CREATE INDEX "dealer_page_benefits_parent_id_idx" ON "dealer_page_benefits" ("_parent_id");
    CREATE TABLE "dealer_page_benefits_locales" (
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "public"."_locales" NOT NULL,
      "_parent_id" varchar NOT NULL REFERENCES "dealer_page_benefits"("id") ON DELETE cascade,
      "title" varchar NOT NULL, "description" varchar NOT NULL
    );
    CREATE UNIQUE INDEX "dealer_page_benefits_locales_locale_parent_id_unique" ON "dealer_page_benefits_locales" ("_locale", "_parent_id");

    INSERT INTO "dealer_page" ("created_at", "updated_at") VALUES (now(), now());
    INSERT INTO "dealer_page_locales" (
      "_locale", "_parent_id", "seo_meta_title", "seo_meta_description",
      "hero_title", "hero_description", "application_intro_title", "application_intro_description"
    ) SELECT 'uk', id, 'Стати дилером V-NRG',
      'Станьте офіційним дилером V-NRG: партнерські умови, маркетингова підтримка та дилерські ціни.',
      'Стати дилером V-NRG',
      'Бажаєте співпрацювати з нами? Заповніть заявку на дилерство — ми зв''яжемося з вами найближчим часом',
      'Стати дилером',
      'Щоб отримати статус офіційного дилера V-NRG, заповніть форму заявки. Після перевірки даних наш менеджер зв’яжеться з вами для уточнення деталей співпраці'
      FROM "dealer_page";
    INSERT INTO "dealer_page_benefits" ("id", "_order", "_parent_id")
      SELECT 'dealer-benefit-' || position, position, id FROM "dealer_page", generate_series(1, 3) AS position;
    INSERT INTO "dealer_page_benefits_locales" ("_locale", "_parent_id", "title", "description") VALUES
      ('uk', 'dealer-benefit-1', 'Партнерські умови', 'Прозора система співпраці та індивідуальний підхід'),
      ('uk', 'dealer-benefit-2', 'Маркетингова підтримка', 'Матеріали, консультації та допомога в запуску'),
      ('uk', 'dealer-benefit-3', 'Дилерські ціни', 'Спеціальні умови закупівлі та персональні знижки');
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE "dealer_page_benefits_locales";
    DROP TABLE "dealer_page_benefits";
    DROP TABLE "dealer_page_locales";
    DROP TABLE "dealer_page";
  `)
}
