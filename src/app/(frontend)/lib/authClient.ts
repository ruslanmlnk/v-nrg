import { toFrontendUser, type FrontendUser } from '../../../lib/frontendUser'

type LoginInput = {
  email: string
  password: string
}

type RegisterInput = LoginInput & {
  firstName: string
  lastName: string
  phone: string
}

type AuthActionResult<T> = {
  data: T | null
  error: string | null
}

type ApiResponsePayload = {
  errors?: unknown
  message?: unknown
  user?: unknown
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
  const response = await fetch('/api/users/login', {
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

export async function registerUser(input: RegisterInput): Promise<AuthActionResult<FrontendUser>> {
  const createResponse = await fetch('/api/users', {
    body: JSON.stringify({
      ...input,
      role: 'user',
    }),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  const createPayload = await parseJson(createResponse)

  if (!createResponse.ok) {
    return {
      data: null,
      error: extractErrorMessage(
        createPayload,
        'Не вдалося створити акаунт. Перевірте введені дані.',
      ),
    }
  }

  return loginUser({
    email: input.email,
    password: input.password,
  })
}

export async function logoutUser() {
  await fetch('/api/users/logout', {
    credentials: 'include',
    method: 'POST',
  })
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
