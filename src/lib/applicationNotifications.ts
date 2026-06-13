import nodemailer from 'nodemailer'

type ApplicationNotification = {
  email: string
  message: string
  name: string
  phone: string
  source: 'contacts' | 'hero-popup'
}

type DealerApplicationNotification = {
  accountEmail: string
  city: string
  companyName: string
  email: string
  firstName: string
  lastName: string
  message: string
  phone: string
}

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null

export async function sendApplicationNotification(application: ApplicationNotification) {
  const sourceLabel =
    application.source === 'contacts' ? 'Форма контактів' : 'Запис на демонстрацію'

  await sendNotification({
    fields: [
      ['Джерело', sourceLabel],
      ["Ім'я", application.name],
      ['Телефон', application.phone],
      ['Email', application.email],
      ['Повідомлення', application.message],
    ],
    subject: `Нова заявка: ${sourceLabel}`,
    title: 'Нова заявка з сайту',
  })
}

export async function sendDealerApplicationNotification(application: DealerApplicationNotification) {
  await sendNotification({
    fields: [
      ['Компанія', application.companyName],
      ["Ім'я", application.firstName],
      ['Прізвище', application.lastName],
      ['Телефон', application.phone],
      ['Email', application.email],
      ['Місто / країна', application.city],
      ['Email акаунта', application.accountEmail],
      ['Повідомлення', application.message],
    ],
    subject: `Нова заявка дилера: ${application.companyName}`,
    title: 'Нова заявка дилера',
  })
}

async function sendNotification({
  fields,
  subject,
  title,
}: {
  fields: [string, string][]
  subject: string
  title: string
}) {
  const mailer = getTransporter()
  const from = requiredEnvironmentVariable('SMTP_FROM')
  const to = requiredEnvironmentVariable('ORDER_NOTIFICATION_EMAIL')

  await mailer.sendMail({
    from,
    html: createHtml(title, fields),
    subject,
    text: createText(title, fields),
    to,
  })
}

function getTransporter() {
  if (transporter) {
    return transporter
  }

  transporter = nodemailer.createTransport({
    auth: {
      pass: requiredEnvironmentVariable('SMTP_PASS'),
      user: requiredEnvironmentVariable('SMTP_USER'),
    },
    host: requiredEnvironmentVariable('SMTP_HOST'),
    port: Number(requiredEnvironmentVariable('SMTP_PORT')),
    secure: requiredEnvironmentVariable('SMTP_SECURE') === 'true',
  })

  return transporter
}

function createHtml(title: string, fields: [string, string][]) {
  const rows = fields
    .filter(([, value]) => value)
    .map(
      ([label, value]) => `<tr>
  <td style="padding:8px 16px 8px 0;font-weight:700;vertical-align:top">${escapeHtml(label)}</td>
  <td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(value)}</td>
</tr>`,
    )
    .join('')

  return `<div style="font-family:Arial,sans-serif;color:#22354a">
  <h1 style="font-size:24px">${escapeHtml(title)}</h1>
  <table style="border-collapse:collapse">${rows}</table>
</div>`
}

function createText(title: string, fields: [string, string][]) {
  return [
    title,
    '',
    ...fields.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`),
  ].join('\n')
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function requiredEnvironmentVariable(name: string) {
  const value = process.env[name]?.trim()

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}
