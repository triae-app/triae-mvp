import type { PropsWithChildren } from 'react'
import { DashboardSidebar } from '@/components/dashboard-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function Layout({ children }: PropsWithChildren) {
	return (
		<SidebarProvider>
			<DashboardSidebar />
			<SidebarInset>
				<div className="relative flex flex-col pb-4 h-full items-stretch justify-stretch place-items-stretch overflow-hidden">
					{children}
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
