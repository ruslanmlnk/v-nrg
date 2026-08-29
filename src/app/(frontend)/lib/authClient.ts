import { toFrontendUser, type FrontendUser } from '../../../lib/frontendUser'

type LoginInput = {
  email: string
  password: string
  turnstileToken?: string
}

export type RegisterInput = LoginInput & {
  firstName: string
  lastName: string
  phone: string
}

type UpdateProfileInput = {
  email?: string
  firstName: string
  lastName: string
  password?: string
  phone: string
  userId: number
}

type AuthActionResult<T> = {
  data: T | null
  error: string | null
}

type ApiResponsePayload = {
  expiresIn?: unknown
  errors?: unknown
  message?: unknown
  user?: unknown
  verificationId?: unknown
  verified?: unknown
}

export async function fetchCurrentUser() {
  const response = await fetch('/api/users/me', {
    cache: 'no-store',
    credentials: 'include',
  })

  const payload = await parseJson(response)

  if (!response.ok) {
    return null
  }

  return toFrontendUser(payload?.user)
}

export async function loginUser(input: LoginInput): Promise<AuthActionResult<FrontendUser>> {
  const response = await fetch('/api/auth/login', {
    body: JSON.stringify(input),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  const payload = await parseJson(response)

  if (!response.ok) {
    return {
      data: null,
      error: extractErrorMessage(payload, 'Не вдалося увійти. Перевірте email і пароль.'),
    }
  }

  return {
    data: toFrontendUser(payload?.user),
    error: null,
  }
}

export async function requestRegistrationCode(
  input: RegisterInput,
  turnstileToken: string,
): Promise<AuthActionResult<{ expiresIn: number; verificationId: number }>> {
  const response = await fetch('/api/auth/register/request-code', {
    body: JSON.stringify({ ...input, turnstileToken }),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  const payload = await parseJson(response)

  if (
    !response.ok ||
    typeof payload?.verificationId !== 'number' ||
    typeof payload.expiresIn !== 'number'
  ) {
    return {
      data: null,
      error: extractErrorMessage(payload, 'Не вдалося надіслати код підтвердження.'),
    }
  }

  return {
    data: { expiresIn: payload.expiresIn, verificationId: payload.verificationId },
    error: null,
  }
}

export async function verifyRegistrationCode({
  code,
  verificationId,
}: {
  code: string
  verificationId: number
}): Promise<AuthActionResult<boolean>> {
  const response = await fetch('/api/auth/register/verify-code', {
    body: JSON.stringify({ code, verificationId }),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })
  const payload = await parseJson(response)

  if (!response.ok || payload?.verified !== true) {
    return {
      data: null,
      error: extractErrorMessage(payload, 'Не вдалося підтвердити номер телефону.'),
    }
  }

  return { data: true, error: null }
}

export async function logoutUser() {
  await fetch('/api/users/logout', {
    credentials: 'include',
    method: 'POST',
  })
}

export async function updateUserProfile(
  input: UpdateProfileInput,
): Promise<AuthActionResult<FrontendUser>> {
  const body: Record<string, string> = {
    firstName: input.firstName,
    lastName: input.lastName,
    phone: input.phone,
  }

  if (input.email !== undefined) {
    body.email = input.email
  }

  if (input.password) {
    body.password = input.password
  }

  const response = await fetch(`/api/users/${input.userId}`, {
    body: JSON.stringify(body),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
  })

  const payload = await parseJson(response)

  if (!response.ok) {
    return {
      data: null,
      error: extractErrorMessage(payload, 'Не вдалося оновити профіль. Перевірте дані.'),
    }
  }

  return {
    data: toFrontendUser(payload?.user ?? payload),
    error: null,
  }
}

async function parseJson(response: Response): Promise<ApiResponsePayload | null> {
  try {
    const payload: unknown = await response.json()

    return isRecord(payload) ? payload : null
  } catch {
    return null
  }
}

function extractErrorMessage(payload: ApiResponsePayload | null, fallback: string) {
  if (!payload) {
    return fallback
  }

  if (Array.isArray(payload.errors)) {
    for (const entry of payload.errors) {
      if (
        entry &&
        typeof entry === 'object' &&
        'message' in entry &&
        typeof entry.message === 'string'
      ) {
        return entry.message
      }
    }
  }

  if (typeof payload.message === 'string') {
    return payload.message
  }

  return fallback
}

function isRecord(value: unknown): value is ApiResponsePayload {
  return Boolean(value) && typeof value === 'object'
}
