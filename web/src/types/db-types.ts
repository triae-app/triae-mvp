import type z from 'zod'
import type { leadSchema } from './schemas/lead-schemas'

export type Lead = z.infer<typeof leadSchema>
