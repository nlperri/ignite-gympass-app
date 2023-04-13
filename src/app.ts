import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

// criar conexão com banco de dados

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Natalia Perri',
    email: 'natalia@gmail.com',
  },
})

// npx prisma migrate dev => criar migration
// npx prisma studio => abre interface no navegador para navegar por tabelas
