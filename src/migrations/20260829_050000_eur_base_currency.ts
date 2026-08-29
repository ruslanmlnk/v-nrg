import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$
    DECLARE
      eur_rate numeric;
    BEGIN
      SELECT "rate" INTO eur_rate FROM "currencies" WHERE "code" = 'EUR' LIMIT 1;

      IF eur_rate IS NOT NULL AND eur_rate > 0 THEN
        UPDATE "products"
        SET
          "price" = "price" / eur_rate,
          "oldprice" = CASE WHEN "oldprice" IS NULL THEN NULL ELSE "oldprice" / eur_rate END;

        UPDATE "currencies"
        SET "rate" = eur_rate / "rate"
        WHERE "rate" > 0;
      END IF;
    END $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DO $$
    DECLARE
      uah_rate numeric;
    BEGIN
      SELECT "rate" INTO uah_rate FROM "currencies" WHERE "code" = 'UAH' LIMIT 1;

      IF uah_rate IS NOT NULL AND uah_rate > 0 THEN
        UPDATE "products"
        SET
          "price" = "price" * uah_rate,
          "oldprice" = CASE WHEN "oldprice" IS NULL THEN NULL ELSE "oldprice" * uah_rate END;

        UPDATE "currencies"
        SET "rate" = uah_rate / "rate"
        WHERE "rate" > 0;
      END IF;
    END $$;
  `)
}
