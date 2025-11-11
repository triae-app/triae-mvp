import { LightbulbOff } from 'lucide-react'
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from '@/components/ui/empty'

export function LeadsTableEmpty() {
	return (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<LightbulbOff />
				</EmptyMedia>
				<EmptyTitle>No data</EmptyTitle>
				<EmptyDescription>No data found</EmptyDescription>
			</EmptyHeader>
		</Empty>
	)
}
