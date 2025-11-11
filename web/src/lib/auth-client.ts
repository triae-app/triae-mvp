import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient({
	baseURL: `${process.env.NEXT_PUBLIC_API_URL}/auth`,
})

export const { signIn, signOut, signUp, useSession, getSession } = authClient
