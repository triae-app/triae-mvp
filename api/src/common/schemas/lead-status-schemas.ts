import { StatusTypeEnum } from '@prisma/client'
import z from 'zod'

export const leadStatusSchema = z.object({
	id: z.uuid(),
	name: z.string(),
	description: z.string().nullable(),
	type: z.enum(StatusTypeEnum),
	createdAt: z.date(),
	updatedAt: z.date(),
})

export const createLeadStatusSchema = z.object({
	name: z.string(),
	description: z.string().optional(),
	type: z.enum(StatusTypeEnum),
})

export const updateLeadStatusSchema = createLeadStatusSchema.partial()
