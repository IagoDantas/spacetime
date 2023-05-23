import fastify from 'fastify'
import 'dotenv/config'

import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { authRoutes } from './routes/auth'
const app = fastify()
app.register(memoriesRoutes)
app.register(authRoutes)

app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'spacetime',
})

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 Server is running on port 3333')
  })
