import type { PropsWithChildren } from 'react'

export function PageHeader({ children }: PropsWithChildren) {
	return (
		<div className="flex items-center justify-between py-4 px-5 shrink-0">
			{children}
		</div>
	)
}

export function PageContent({ children }: PropsWithChildren) {
	return (
		<div className="w-full h-full min-h-0 overflow-hidden px-5">{children}</div>
	)
}

export function Page({ children }: PropsWithChildren) {
	return (
		<div className="relative flex flex-col items-stretch place-items-stretch w-full flex-1 min-h-0 overflow-hidden">
			{children}
		</div>
	)
}
