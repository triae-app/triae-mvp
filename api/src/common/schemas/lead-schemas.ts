import z from 'zod'
import { leadStatusSchema } from './lead-status-schemas'

export const leadSchema = z.object({
	id: z.uuid(),
	name: z.string(),
	email: z.string().nullable(),
	phone: z.string().nullable(),
	company: z.string().nullable(),
	status: leadStatusSchema,
	createdAt: z.date(),
	updatedAt: z.date(),
})

export const createLeadSchema = z.object({
	name: z.string(),
	email: z.string().optional(),
	phone: z.string().optional(),
	company: z.string().optional(),
	statusId: z.uuid(),
})

export const updateLeadSchema = createLeadSchema.partial()
