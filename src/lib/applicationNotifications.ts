import nodemailer from 'nodemailer'

import type { Order } from '@/payload-types'

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

export async function sendOrderNotification(order: Order, to?: string) {
  const items = order.items
    .map(
      (item) =>
        `${item.title} — ${item.quantity} × ${formatMoney(item.price)} = ${formatMoney(item.total)}`,
    )
    .join('\n')

  await sendNotification({
    fields: [
      ['Номер замовлення', order.orderNumber],
      ["Ім'я", `${order.firstName} ${order.lastName}`.trim()],
      ['Телефон', order.phone],
      ['Email', order.customerEmail],
      ['Товари', items],
      ['Загальна сума', formatMoney(order.total)],
      ['Спосіб оплати', paymentMethodLabels[order.paymentMethod]],
      ['Спосіб доставки', deliveryMethodLabels[order.delivery?.method ?? ''] ?? 'Не вказано'],
      ['Відділення / адреса', order.delivery?.pickupPoint ?? ''],
      ['Коментар', order.comment ?? ''],
    ],
    subject: `Нове замовлення №${order.orderNumber}`,
    title: 'Нове замовлення з сайту',
    to,
  })
}

async function sendNotification({
  fields,
  subject,
  title,
  to,
}: {
  fields: [string, string][]
  subject: string
  title: string
  to?: string
}) {
  const mailer = getTransporter()
  const from = requiredEnvironmentVariable('SMTP_FROM')
  const recipient = to?.trim() || requiredEnvironmentVariable('ORDER_NOTIFICATION_EMAIL')

  await mailer.sendMail({
    from,
    html: createHtml(title, fields),
    subject,
    text: createText(title, fields),
    to: recipient,
  })
}

const paymentMethodLabels: Record<Order['paymentMethod'], string> = {
  'card-online': 'Оплата карткою онлайн',
  'cash-on-delivery': 'Накладений платіж',
  invoice: 'Безготівковий розрахунок',
  'monobank-parts': 'Оплата частинами Monobank',
}

const deliveryMethodLabels: Record<string, string> = {
  courier: "Кур'єр",
  'nova-poshta': 'Нова пошта',
  pickup: 'Самовивіз',
}

function formatMoney(value: number) {
  return `${new Intl.NumberFormat('uk-UA', { maximumFractionDigits: 2 }).format(value)} грн`
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
