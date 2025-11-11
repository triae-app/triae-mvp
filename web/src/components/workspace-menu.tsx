'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, LogOut, Settings2 } from 'lucide-react'
import { Button } from './ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Label } from './ui/label'

export function WorkspaceMenu() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<Button type="button" variant="ghost" size="sm" className="px-2">
				<div className="flex items-center justify-start w-full gap-2">
					<div className="flex items-center justify-center size-5 bg-blue-500 rounded-sm">
						T
					</div>
					<Label className="select-none">Triae</Label>
					<ChevronDown className="size-3 text-muted-foreground" />
				</div>
			</Button>
		)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button type="button" variant="ghost" size="sm" className="px-2">
					<div className="flex items-center justify-start w-full gap-2">
						<div className="flex items-center justify-center size-5 bg-blue-500 rounded-sm">
							T
						</div>
						<Label className="select-none">Triae</Label>
						<ChevronDown className="size-3 text-muted-foreground" />
					</div>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<Settings2 />
					Settings
				</DropdownMenuItem>
				<DropdownMenuItem>
					<LogOut />
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
