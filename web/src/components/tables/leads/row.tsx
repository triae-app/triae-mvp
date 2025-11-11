'use client'

import { flexRender, type Row } from '@tanstack/react-table'
import { TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import type { Lead } from '@/types/db-types'

type Props = {
	row: Row<Lead>
}

export function LeadsTableRow({ row }: Props) {
	return (
		<TableRow
			className="bg-accent/10 hover:bg-accent/20 cursor-default h-[45px] border-none"
			key={row.id}
		>
			{row.getVisibleCells().map((cell, index) => (
				<TableCell
					key={cell.id}
					className={cn(
						index === 0 && 'rounded-l-md pl-5',
						index === row.getVisibleCells().length - 1 &&
							'rounded-r-md pr-4 w-12',
						'hidden md:table-cell',
					)}
				>
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</TableCell>
			))}
		</TableRow>
	)
}
