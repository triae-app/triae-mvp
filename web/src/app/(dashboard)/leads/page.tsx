'use client'

import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Page, PageContent, PageHeader } from '@/components/ui/page'

export default function Leads() {
	return (
		<Page>
			<PageHeader>
				<div className="flex items-center gap-4">
					<Label className="text-sm font-medium">Leads</Label>
					<div className="flex items-center gap-2">
						<Button type="button" size="xs" variant="secondary">
							Assigned
						</Button>
						<Button type="button" size="xs" variant="outline">
							Created
						</Button>
						<Button type="button" size="xs" variant="outline">
							Subscribed
						</Button>
						<Button type="button" size="xs" variant="outline">
							Activity
						</Button>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Button type="button" size="icon-xs" variant="secondary">
						<Plus className="size-3" />
					</Button>
				</div>
			</PageHeader>
			<PageContent>
				<span>Leads</span>
			</PageContent>
		</Page>
	)
}
