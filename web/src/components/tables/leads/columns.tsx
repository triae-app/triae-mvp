'use client'

import type { ColumnDef } from '@tanstack/react-table'
import { MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { Lead } from '@/types/db-types'

export const LeadsTableColumns: ColumnDef<Lead>[] = [
	{
		header: 'Name',
		accessorKey: 'name',
	},
	{
		header: 'Email',
		accessorKey: 'email',
	},
	{
		header: 'Phone',
		accessorKey: 'phone',
	},
	{
		header: 'Company',
		accessorKey: 'company',
	},
	{
		header: () => null,
		id: 'actions',
		cell: ({ row }) => (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button type="button" size="icon-xs" variant="ghost">
						<MoreVertical className="size-3 text-muted-foreground" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Edit</DropdownMenuItem>
					<DropdownMenuItem>Delete</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		),
	},
]
