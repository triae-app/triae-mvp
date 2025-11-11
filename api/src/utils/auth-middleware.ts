import type { FastifyReply, FastifyRequest } from 'fastify'
import { auth } from './auth'

export async function requireAuth(
	request: FastifyRequest,
	reply: FastifyReply,
): Promise<void> {
	try {
		const headers = new Headers()
		for (const [key, value] of Object.entries(request.headers)) {
			if (value) {
				if (Array.isArray(value)) {
					for (const v of value) {
						headers.append(key, v)
					}
				} else {
					headers.append(key, value.toString())
				}
			}
		}

		const session = await auth.api.getSession({
			headers,
		})

		if (!session) {
			reply.status(401).send({
				error: 'Unauthorized',
				message: 'Authentication required',
			})
			return
		}
	} catch {
		reply.status(401).send({
			error: 'Unauthorized',
			message: 'Authentication required',
		})
		return
	}
}
