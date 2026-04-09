import { APIError, type Access, type CollectionConfig, type PayloadRequest } from 'payload'

const isAdmin: Access = ({ req: { user } }) => user?.collection === 'users' && user.role === 'admin'
const canAccessAdmin = ({ req }: { req: PayloadRequest }) =>
  req.user?.collection === 'users' && req.user.role === 'admin'

const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (!user) {
    return false
  }

  if (user.collection === 'users' && user.role === 'admin') {
    return true
  }

  return {
    id: {
      equals: user.id,
    },
  }
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    defaultColumns: ['firstName', 'lastName', 'email', 'phone', 'role'],
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    admin: canAccessAdmin,
    create: () => true,
    delete: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) {
          return data
        }

        if (typeof data.firstName === 'string') {
          data.firstName = data.firstName.trim()
        }

        if (typeof data.lastName === 'string') {
          data.lastName = data.lastName.trim()
        }

        if (typeof data.phone === 'string') {
          data.phone = normalizePhone(data.phone)
        }

        return data
      },
    ],
    beforeChange: [
      ({ context, data, operation, originalDoc, req }) => {
        if (!data) {
          return data
        }

        const isRequestFromAdmin = req.user?.collection === 'users' && req.user.role === 'admin'
        const isFirstRegisterRequest = isFirstAdminBootstrapRequest(req)
        const canManageRole =
          context.allowRoleManagement === true || isRequestFromAdmin || isFirstRegisterRequest

        if (operation === 'create' && !canManageRole) {
          data.role = 'user'
        }

        if (operation === 'update' && !canManageRole && 'role' in data) {
          delete data.role
        }

        const effectiveRole = data.role ?? originalDoc?.role ?? 'user'
        const effectiveFirstName = getResolvedText(data.firstName, originalDoc?.firstName)
        const effectiveLastName = getResolvedText(data.lastName, originalDoc?.lastName)
        const effectivePhone = getResolvedText(data.phone, originalDoc?.phone)

        if (
          effectiveRole !== 'admin' &&
          (!effectiveFirstName || !effectiveLastName || !effectivePhone)
        ) {
          throw new APIError(
            'Для користувачів і дилерів поля імʼя, прізвище та телефон є обовʼязковими.',
            400,
          )
        }

        return data
      },
    ],
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'user',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
        {
          label: 'Dealer',
          value: 'dealer',
        },
      ],
      required: true,
      saveToJWT: true,
    },
  ],
}

function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, '')

  if (!digits) {
    return ''
  }

  if (digits.startsWith('380')) {
    return `+${digits}`
  }

  if (digits.length === 10 && digits.startsWith('0')) {
    return `+38${digits}`
  }

  if (digits.length === 9) {
    return `+380${digits}`
  }

  return value.trim()
}

function getResolvedText(nextValue: unknown, previousValue: unknown) {
  if (typeof nextValue === 'string') {
    return nextValue.trim()
  }

  if (typeof previousValue === 'string') {
    return previousValue.trim()
  }

  return ''
}

function isFirstAdminBootstrapRequest(req: PayloadRequest) {
  const expressLikeRequest = req as PayloadRequest & { originalUrl?: string }
  const requestUrl =
    (typeof req.url === 'string' && req.url) ||
    (typeof expressLikeRequest.originalUrl === 'string' && expressLikeRequest.originalUrl) ||
    ''

  return requestUrl.includes('/first-register')
}
