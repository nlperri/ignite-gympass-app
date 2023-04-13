import 'dotenv/config'
import { z } from 'zod'

//validar variáveis ambientes

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

//process.env: {NODE_ENV: 'dev',...}

//safeParse => tenta validar o process.env de acordo com as informações declaradas no envSchema

if (_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}

//_env.error.format() => formata os erros

export const env = _env.data

//_env.data => dados das variáveis ambientes
