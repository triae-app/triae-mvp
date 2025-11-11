'use client'

import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table'
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import type { Lead } from '@/types/db-types'
import { LeadsTableColumns as columns } from './columns'
import { LeadsTableEmpty } from './empty'
import { LeadsTableRow } from './row'

export const LeadsTable = ({ leads }: { leads: Lead[] }) => {
	const table = useReactTable({
		data: leads,
		columns,
		getCoreRowModel: getCoreRowModel(),
	})

	if (leads.length === 0) {
		return <LeadsTableEmpty />
	}

	return (
		<Table className="border-separate border-spacing-y-[5px]">
			<TableHeader>
				{table.getHeaderGroups().map((headerGroup) => (
					<TableRow
						key={headerGroup.id}
						className="hover:bg-transparent border-none"
					>
						{headerGroup.headers.map((header, index) => {
							const isFirst = index === 0
							const isLast = index === headerGroup.headers.length - 1

							return (
								<TableHead
									key={header.id}
									className={`${isFirst ? 'pl-6' : ''} ${isLast ? 'text-right' : ''}`}
								>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
								</TableHead>
							)
						})}
					</TableRow>
				))}
			</TableHeader>
			<TableBody>
				{table.getRowModel().rows.map((row) => (
					<LeadsTableRow key={row.id} row={row} />
				))}
			</TableBody>
		</Table>
	)
}
