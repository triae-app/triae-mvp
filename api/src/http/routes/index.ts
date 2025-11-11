import type { FastifyInstance } from 'fastify'
import { betterAuth } from './better-auth'
import { leadStatusRoutes } from './lead-status-routes'
import { leadsRoutes } from './leads-routes'

export async function httpRoutes(app: FastifyInstance) {
	app.register(betterAuth)
	app.register(leadsRoutes)
	app.register(leadStatusRoutes)
}
