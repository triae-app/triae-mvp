import z from 'zod'

export const statusEnumSchema = z.enum([
	'BACKLOG',
	'TODO',
	'COMPLETED',
	'CANCELED',
])

export const leadStatusSchema = z.object({
	id: z.uuid(),
	name: z.string(),
	description: z.string().nullable(),
	type: statusEnumSchema,
	createdAt: z.date(),
	updatedAt: z.date(),
})

export const createLeadStatusSchema = z.object({
	name: z.string(),
	description: z.string().optional(),
	type: statusEnumSchema,
})

export const updateLeadStatusSchema = createLeadStatusSchema.partial()
