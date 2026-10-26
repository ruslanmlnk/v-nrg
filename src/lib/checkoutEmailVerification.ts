import { createHmac, randomInt, randomUUID } from 'node:crypto'
import type { Payload } from 'payload'
import { sendCheckoutVerificationEmail } from './applicationNotifications'

export function normalizeCheckoutEmail(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const email = value.trim().toLowerCase()
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null
}

function hash(value: string) {
  const secret = process.env.PAYLOAD_SECRET
  if (!secret) throw new Error('PAYLOAD_SECRET is required')
  return createHmac('sha256', secret).update(`checkout-email:${value}`).digest('hex')
}

export async function requestCheckoutCode(
  payload: Payload,
  email: string,
  ip: string,
  english: boolean,
) {
  const emailHash = hash(email)
  const ipHash = hash(ip)
  const id = randomUUID()
  const code = randomInt(0, 1000000).toString().padStart(6, '0')
  const client = await payload.db.pool.connect()
  try {
    await client.query('BEGIN')
    // Serialize both limits across all application instances.
    await client.query('SELECT pg_advisory_xact_lock(hashtext($1))', [`checkout-ip:${ipHash}`])
    await client.query('SELECT pg_advisory_xact_lock(hashtext($1))', [
      `checkout-email:${emailHash}`,
    ])
    const limits = await client.query<{ limited: boolean }>(
      `
      SELECT EXISTS (
        SELECT 1 FROM checkout_email_codes WHERE email_hash = $1 AND created_at > now() - interval '60 seconds'
      ) OR (SELECT count(*) FROM checkout_email_codes WHERE email_hash = $1 AND created_at > now() - interval '1 hour') >= 5
        OR (SELECT count(*) FROM checkout_email_codes WHERE ip_hash = $2 AND created_at > now() - interval '1 hour') >= 10 AS limited
    `,
      [emailHash, ipHash],
    )
    if (limits.rows[0].limited) {
      await client.query('ROLLBACK')
      return null
    }
    await client.query('UPDATE checkout_email_codes SET consumed = true WHERE email_hash = $1', [
      emailHash,
    ])
    await client.query(
      `INSERT INTO checkout_email_codes (id, email_hash, ip_hash, code_hash)
      VALUES ($1, $2, $3, $4)`,
      [id, emailHash, ipHash, hash(`${id}:${email}:${code}`)],
    )
    await client.query('COMMIT')
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  } finally {
    client.release()
  }
  await sendCheckoutVerificationEmail(email, code, english)
  return id
}

export async function consumeCheckoutCode(
  payload: Payload,
  email: string,
  id: unknown,
  code: unknown,
  consume = true,
) {
  if (
    typeof id !== 'string' ||
    !/^[0-9a-f-]{36}$/i.test(id) ||
    typeof code !== 'string' ||
    !/^\d{6}$/.test(code)
  )
    return false
  // One atomic update: failed attempts count even under concurrency; success can only be used once.
  const result = await payload.db.pool.query<{ valid: boolean }>(
    `
    UPDATE checkout_email_codes SET attempts = attempts + CASE WHEN code_hash = $3 THEN 0 ELSE 1 END,
      consumed = (code_hash = $3 AND $4)
    WHERE id = $1 AND email_hash = $2 AND consumed = false AND attempts < 5
      AND created_at > now() - interval '10 minutes'
    RETURNING (code_hash = $3) AS valid
  `,
    [id, hash(email), hash(`${id}:${email}:${code}`), consume],
  )
  return result.rows[0]?.valid === true
}
