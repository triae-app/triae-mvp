import { cookies } from 'next/headers'
import { createApiClient } from '@/lib/api-client'
import type { Lead } from '@/types/db-types'

interface GetLeadsResponse {
	leads: Lead[]
}

export async function getLeads() {
	const cookieStore = await cookies()
	const sessionToken = cookieStore.get('better-auth.session_token')?.value

	// Cria um cliente API com o token do servidor
	const api = createApiClient(sessionToken)

	const response = await api
		.get('leads', {
			next: {
				tags: ['leads'],
			},
		})
		.json<GetLeadsResponse>()

	return response.leads
}
