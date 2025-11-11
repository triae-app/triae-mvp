import type { FastifyInstance } from 'fastify'
import { betterAuth } from './better-auth'
import { helloWorld } from './hello-world'
import { leadsRoutes } from './leads-routes'

export async function httpRoutes(app: FastifyInstance) {
	app.register(helloWorld)
	app.register(betterAuth)
	app.register(leadsRoutes)
}
