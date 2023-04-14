import fastify from 'fastify'
import { appRoutes } from './http/routes'

export const app = fastify()

app.register(appRoutes)

// npx prisma migrate dev => criar migration
// npx prisma studio => abre interface no navegador para navegar por tabelas
