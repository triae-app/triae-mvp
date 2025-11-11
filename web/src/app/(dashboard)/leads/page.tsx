import { Plus } from 'lucide-react'
import { getLeads } from '@/actions/get-leads'
import { LeadsTable } from '@/components/tables/leads/table'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Page, PageContent, PageHeader } from '@/components/ui/page'

export default async function Leads() {
	const fetchLeads = await getLeads()

	const leadsData = fetchLeads ?? []

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
				<div className="bg-card/30 rounded-[10px] border border-input/50">
					<LeadsTable leads={leadsData} />
				</div>
			</PageContent>
		</Page>
	)
}
