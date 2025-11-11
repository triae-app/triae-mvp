import { Inbox, SquarePen, Users2Icon } from 'lucide-react'

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Button } from './ui/button'
import { WorkspaceMenu } from './workspace-menu'

const items = [
	{
		title: 'Inbox',
		url: '#',
		icon: Inbox,
	},
	{
		title: 'Leads',
		url: '#',
		icon: Users2Icon,
	},
]

export function DashboardSidebar() {
	return (
		<Sidebar variant="inset">
			<SidebarContent>
				<SidebarHeader className="-mb-4">
					<div className="flex items-center justify-between">
						<WorkspaceMenu />
						<Button type="button" size="icon-sm" variant="secondary">
							<SquarePen />
						</Button>
					</div>
				</SidebarHeader>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	)
}
