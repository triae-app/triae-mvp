import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'
import {
	createLeadStatusSchema,
	leadStatusSchema,
	updateLeadStatusSchema,
} from '@/common/schemas/lead-status-schemas'
import { LeadStatusService } from '@/services/leads-status-service'
import { requireAuth } from '@/utils/auth-middleware'

const leadStatusService = new LeadStatusService()

async function getLeadStatuses(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().get(
		'/leads/status',
		{
			preHandler: requireAuth,
			schema: {
				tags: ['Lead Statuses'],
				summary: 'Get all lead statuses',
				response: {
					200: z.object({
						leadStatuses: z.array(leadStatusSchema),
					}),
					401: z.object({
						error: z.string(),
						message: z.string(),
					}),
				},
			},
		},
		async (_request, reply) => {
			const leadStatuses = await leadStatusService.getLeadStatuses()
			return reply.send({ leadStatuses })
		},
	)
}

async function getLeadStatus(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().get(
		'/leads/status/:leadStatusId',
		{
			preHandler: requireAuth,
			schema: {
				tags: ['Lead Statuses'],
				summary: 'Get a lead status by ID',
				params: z.object({
					leadStatusId: z.string(),
				}),
				response: {
					200: leadStatusSchema,
					401: z.object({
						error: z.string(),
						message: z.string(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { leadStatusId } = request.params as { leadStatusId: string }
			return reply.send(await leadStatusService.getLeadStatus(leadStatusId))
		},
	)
}

async function createLeadStatus(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().post(
		'/leads/status',
		{
			preHandler: requireAuth,
			schema: {
				tags: ['Lead Statuses'],
				summary: 'Create a new lead status',
				body: createLeadStatusSchema,
				response: {
					201: leadStatusSchema,
					401: z.object({
						error: z.string(),
						message: z.string(),
					}),
				},
			},
		},
		async (request, reply) => {
			return reply
				.status(201)
				.send(await leadStatusService.createLeadStatus({ ...request.body }))
		},
	)
}

async function updateLeadStatus(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().put(
		'/leads/status/:leadStatusId',
		{
			preHandler: requireAuth,
			schema: {
				tags: ['Lead Statuses'],
				summary: 'Update a lead status',
				body: updateLeadStatusSchema,
				params: z.object({
					leadStatusId: z.string(),
				}),
				response: {
					204: z.null(),
					401: z.object({
						error: z.string(),
						message: z.string(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { leadStatusId } = request.params as { leadStatusId: string }
			const updateLeadStatusData = request.body

			await leadStatusService.updateLeadStatus(
				leadStatusId,
				updateLeadStatusData,
			)

			return reply.status(204).send()
		},
	)
}

async function deleteLeadStatus(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().delete(
		'/leads/status/:leadStatusId',
		{
			preHandler: requireAuth,
			schema: {
				tags: ['Lead Statuses'],
				summary: 'Delete a lead status by ID',
				params: z.object({
					leadStatusId: z.string(),
				}),
				response: {
					204: z.null(),
					401: z.object({
						error: z.string(),
						message: z.string(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { leadStatusId } = request.params as { leadStatusId: string }
			await leadStatusService.deleteLeadStatus(leadStatusId)
			return reply.status(204).send()
		},
	)
}

export async function leadStatusRoutes(app: FastifyInstance) {
	app.register(getLeadStatuses)
	app.register(getLeadStatus)
	app.register(createLeadStatus)
	app.register(updateLeadStatus)
	app.register(deleteLeadStatus)
}
