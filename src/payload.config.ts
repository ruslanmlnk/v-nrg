import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { en } from '@payloadcms/translations/languages/en'
import { uk } from '@payloadcms/translations/languages/uk'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Reviews } from './collections/Reviews'
import { Products } from './collections/Products'
import { Category } from './collections/Category'
import { Articles } from './collections/Articles'
import { Orders } from './collections/Orders'
import { LegalPages } from './collections/LegalPages'
import { Locations } from './collections/Locations'
import { TrainingCategories } from './collections/TrainingCategories'
import { TrainingVideos } from './collections/TrainingVideos'
import { Applications } from './collections/Applications'
import { DealerApplications } from './collections/DealerApplications'
import { Currencies } from './collections/Currencies'
import { SocialNetworks } from './collections/SocialNetworks'
import { Home } from './globals/Home'
import { Training } from './globals/Training'
import { Contacts } from './globals/Contacts'
import { SiteSettings } from './globals/SiteSettings'
import { AboutPage } from './globals/AboutPage'
import { ReviewPage } from './globals/ReviewPage'
import { BlogPage } from './globals/BlogPage'
import { localizedContent } from './plugins/localizedContent'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Reviews,
    Products,
    Category,
    Articles,
    Orders,
    LegalPages,
    Locations,
    TrainingCategories,
    TrainingVideos,
    Applications,
    DealerApplications,
    Currencies,
    SocialNetworks,
  ],
  i18n: {
    fallbackLanguage: 'uk',
    supportedLanguages: { en, uk },
  },
  localization: {
    defaultLocale: 'uk',
    fallback: true,
    locales: [
      { label: 'Українська', code: 'uk' },
      { label: 'English', code: 'en' },
    ],
  },
  editor: lexicalEditor(),
  graphQL: {
    schemaOutputFile: path.resolve(
      dirname,
      'app',
      '(frontend)',
      'lib',
      'graphql',
      'schema.graphql',
    ),
  },
  globals: [Home, Training, Contacts, SiteSettings, AboutPage, ReviewPage, BlogPage],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    push: false,
  }),
  sharp,
  plugins: [localizedContent],
})
