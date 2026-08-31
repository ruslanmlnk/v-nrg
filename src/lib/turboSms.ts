type TurboSmsResponse = {
  response_code?: number
  response_result?: Array<{
    response_code?: number
    response_status?: string
  }>
  response_status?: string
}

export async function sendRegistrationCode(phone: string, code: string) {
  const token = requiredEnvironmentVariable('TURBOSMS_API_TOKEN')
  const sender = requiredEnvironmentVariable('TURBOSMS_SENDER')
  const endpoint =
    process.env.TURBOSMS_API_URL?.trim() || 'https://api.turbosms.ua/message/send.json'
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipients: [phone.replace(/\D/g, '')],
      sms: {
        sender,
        text: `Код підтвердження V-NRG: ${code}. Код дійсний 5 хвилин.`,
      },
    }),
  })
  const result = (await response.json().catch(() => null)) as TurboSmsResponse | null
  const messageAccepted =
    result?.response_code === 801 &&
    result.response_result?.length === 1 &&
    result.response_result[0]?.response_code === 0

  if (!response.ok || !messageAccepted) {
    console.error('TurboSMS request failed', {
      responseCode: result?.response_code,
      responseStatus: result?.response_status,
      status: response.status,
    })
    throw new Error('TurboSMS failed to send verification code')
  }
}

function requiredEnvironmentVariable(name: string) {
  const value = process.env[name]?.trim()

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}
