import type { CodegenConfig } from '@graphql-codegen/cli'
import { buildSchema } from 'graphql'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const schemaPath = path.resolve('src', 'app', '(frontend)', 'lib', 'graphql', 'schema.graphql')
const generatedPath = path.resolve('src', 'app', '(frontend)', 'lib', 'graphql', 'generated.ts')

const config: CodegenConfig = {
  config: {
    rawRequest: false,
    scalars: {
      DateTime: 'string',
      EmailAddress: 'string',
      JSON: 'unknown',
      JSONObject: 'Record<string, unknown>',
    },
  },
  documents: ['src/**/documents/**/*.graphql'],
  generates: {
    [generatedPath]: {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
  },
  schema: buildSchema(readFileSync(schemaPath, 'utf8')),
}

export default config
