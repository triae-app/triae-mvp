import type { FastifyInstance } from 'fastify'
import { helloWorld } from './hello-world'

export async function httpRoutes(app: FastifyInstance) {
	app.register(helloWorld)
}
