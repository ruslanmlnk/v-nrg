import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "registration_verifications" (
      "id" serial PRIMARY KEY NOT NULL,
      "phone_hash" varchar NOT NULL,
      "email_hash" varchar NOT NULL,
      "ip_hash" varchar NOT NULL,
      "encrypted_payload" varchar NOT NULL,
      "code_hash" varchar NOT NULL,
      "expires_at" timestamp(3) with time zone NOT NULL,
      "last_sent_at" timestamp(3) with time zone NOT NULL,
      "window_started_at" timestamp(3) with time zone NOT NULL,
      "attempts" numeric DEFAULT 0 NOT NULL,
      "send_count" numeric DEFAULT 1 NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE INDEX IF NOT EXISTS "registration_verifications_phone_hash_idx" ON "registration_verifications" USING btree ("phone_hash");
    CREATE INDEX IF NOT EXISTS "registration_verifications_email_hash_idx" ON "registration_verifications" USING btree ("email_hash");
    CREATE INDEX IF NOT EXISTS "registration_verifications_ip_hash_idx" ON "registration_verifications" USING btree ("ip_hash");
    CREATE INDEX IF NOT EXISTS "registration_verifications_expires_at_idx" ON "registration_verifications" USING btree ("expires_at");
    CREATE INDEX IF NOT EXISTS "registration_verifications_updated_at_idx" ON "registration_verifications" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "registration_verifications_created_at_idx" ON "registration_verifications" USING btree ("created_at");

    ALTER TABLE "payload_locked_documents_rels"
      ADD COLUMN IF NOT EXISTS "registration_verifications_id" integer;

    DO $$ BEGIN
      ALTER TABLE "payload_locked_documents_rels"
        ADD CONSTRAINT "payload_locked_documents_rels_registration_verifications_fk"
        FOREIGN KEY ("registration_verifications_id") REFERENCES "public"."registration_verifications"("id")
        ON DELETE cascade ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_registration_verifications_id_idx"
      ON "payload_locked_documents_rels" USING btree ("registration_verifications_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels"
      DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_registration_verifications_fk";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_registration_verifications_id_idx";
    ALTER TABLE "payload_locked_documents_rels"
      DROP COLUMN IF EXISTS "registration_verifications_id";
    DROP TABLE IF EXISTS "registration_verifications" CASCADE;
  `)
}
