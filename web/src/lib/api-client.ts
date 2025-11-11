import ky, { type KyInstance } from 'ky'

const SESSION_TOKEN_COOKIE_NAME = 'better-auth.session_token'

export const api: KyInstance = ky.create({
	prefixUrl: process.env.NEXT_PUBLIC_API_URL,
	credentials: 'include',
})

export function createApiClient(sessionToken?: string): KyInstance {
	return ky.create({
		prefixUrl: process.env.NEXT_PUBLIC_API_URL,
		hooks: {
			beforeRequest: [
				async (request) => {
					if (sessionToken) {
						request.headers.set(
							'Cookie',
							`${SESSION_TOKEN_COOKIE_NAME}=${sessionToken}`,
						)
					}
				},
			],
		},
	})
}
