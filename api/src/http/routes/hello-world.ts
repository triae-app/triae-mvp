import type { FastifyInstance } from 'fastify'

export async function helloWorld(app: FastifyInstance) {
	app.get('/', async () => {
		return 'Hello World!'
	})
}
