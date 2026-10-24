import { sql, type MigrateUpArgs, type MigrateDownArgs } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE checkout_email_codes (
      id uuid PRIMARY KEY,
      email_hash text NOT NULL,
      ip_hash text NOT NULL,
      code_hash text NOT NULL,
      attempts integer NOT NULL DEFAULT 0,
      consumed boolean NOT NULL DEFAULT false,
      created_at timestamptz NOT NULL DEFAULT now()
    );
    CREATE INDEX checkout_email_codes_email_created_idx ON checkout_email_codes (email_hash, created_at);
    CREATE INDEX checkout_email_codes_ip_created_idx ON checkout_email_codes (ip_hash, created_at);
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`DROP TABLE checkout_email_codes;`)
}
