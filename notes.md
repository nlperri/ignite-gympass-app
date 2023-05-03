## JWT: JSON Web Token

- Usuário faz login => envia e-mail/senha => o back-end cria um token ÚNICO e não-modificavel e STATELESS

- Stateless: Não armazenado em nenhuma estrutura de persistência de dados (banco de dados)

- Back-end => Quando vai criar o token usa uma PALAVRA-CHAVE (string)

- Palavra-chave: skjfhkjsdhfkjhweihal (assinatura)

- E-mail/senha => header.payload.sign (compõem o JWT)

- Só o back-end consegue decodificar o token para garantir que o token foi criado por ele mesmo

- Login => JWT

- JWT => Todas as requisições dali pra frente
- Header (cabeçalho): Authorization: Bearer JWT

## Schema Prisma

- model = table
- @id = primare key
- @@ => config da table
- @ => config da coluna

- npx prisma generate => cria de forma automatizada a tipagem do schema (integração com o TS)
- npm i @prisma/client => dependência de produção pra acessar o banco de dados
- Hashing => não é possível desencriptar a senha

## Npx prisma

- npx prisma migrate dev => criar migration
- npx prisma studio => abre interface no navegador para navegar por tabelas

## ENV

- validar variáveis ambientes (envSchema)

- process.env: {NODE_ENV: 'dev',...}

- safeParse => tenta validar o process.env de acordo com as informações declaradas no envSchema

- \_env.error.format() => formata os erros

- \_env.data => dados das variáveis ambientes

- npm i dotenv => carrega o arquivo .env e transforma em variáveis ambientes dentro do node (import 'dotenv/config')(process.env.NODE_ENV)

## Hash

- hash(password, 6) => 6 rounds para gerar o hash (cada round dificulta o hash de ser descoberto, porém quanto mais round mais pesado para a aplicação)

## Vitest E2E

- Criar pasta com nome vitest-environment-"nome"

- npm init -y (criar package-json)

- deletar scripts

- criar arquivo "nome"-test-environment.ts (nome tanto faz)

- dentro do package, em "main": "nome-test-environment.ts"

- no vitest.config adicionar ->

test: {
environmentMatchGlobs: [
['src/http/controllers/**m','nome-colocado-depois-de-vitest-environment']
]
}

- npm link (dentro da pasta vitest-environment)

- na pasta raiz npm link vitest-environment-"nome"

- criar spec dentro do controller ->

import { Environment } from 'vitest'

export default <Environment>{
name: 'nome-colocado-depois-de-vitest-environment',
async setup() {
console.log('Setup')

    return {
      async teardown() {
        console.log('Teardown')
      },
    }

},
}

- setup => executa antes do teste
- teardown => executa depois do teste
