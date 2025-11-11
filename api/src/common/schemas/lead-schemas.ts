import z from 'zod'

export const leadSchema = z.object({
	id: z.uuid(),
	name: z.string(),
	email: z.string().nullable(),
	phone: z.string().nullable(),
	company: z.string().nullable(),
	createdAt: z.date(),
	updatedAt: z.date(),
})

export const createLeadSchema = z.object({
	name: z.string(),
	email: z.string().optional(),
	phone: z.string().optional(),
	company: z.string().optional(),
})

export const updateLeadSchema = createLeadSchema.partial()
