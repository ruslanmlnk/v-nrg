import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

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
import { Home } from './globals/Home'
import { Training } from './globals/Training'

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
  ],
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
  globals: [Home, Training],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
