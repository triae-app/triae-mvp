'use client'

import { useSession } from '@/lib/auth-client'

export default function Dashboard() {
	const { data } = useSession()

	return (
		<div>
			<span>{data?.user.name ?? 'User not authenticated'}</span>
		</div>
	)
}
