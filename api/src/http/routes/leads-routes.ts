import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'
import {
	createLeadSchema,
	leadSchema,
	updateLeadSchema,
} from '@/common/schemas/lead-schemas'
import { LeadsService } from '@/services/leads-service'
import { requireAuth } from '@/utils/auth-middleware'

const leadsService = new LeadsService()

async function getLeads(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().get(
		'/leads',
		{
			preHandler: requireAuth,
			schema: {
				tags: ['Leads'],
				summary: 'Get all leads',
				response: {
					200: z.object({
						leads: z.array(leadSchema),
					}),
					401: z.object({
						error: z.string(),
						message: z.string(),
					}),
				},
			},
		},
		async (_request, reply) => {
			const leads = await leadsService.getLeads()
			return reply.send({ leads })
		},
	)
}

async function getLead(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().get(
		'/leads/:leadId',
		{
			preHandler: requireAuth,
			schema: {
				tags: ['Leads'],
				summary: 'Get a lead by ID',
				params: z.object({
					leadId: z.string(),
				}),
				response: {
					200: leadSchema,
					401: z.object({
						error: z.string(),
						message: z.string(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { leadId } = request.params as { leadId: string }
			return reply.send(await leadsService.getLead(leadId))
		},
	)
}

async function createLead(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().post(
		'/leads',
		{
			preHandler: requireAuth,
			schema: {
				tags: ['Leads'],
				summary: 'Create a new lead',
				body: createLeadSchema,
				response: {
					201: leadSchema,
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
				.send(await leadsService.createLead({ ...request.body }))
		},
	)
}

async function updateLead(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().put(
		'/leads/:leadId',
		{
			preHandler: requireAuth,
			schema: {
				tags: ['Leads'],
				summary: 'Update a lead',
				body: updateLeadSchema,
				params: z.object({
					leadId: z.string(),
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
			const { leadId } = request.params as { leadId: string }
			const updateLeadData = request.body

			await leadsService.updateLead(leadId, updateLeadData)

			return reply.status(204).send()
		},
	)
}

async function deleteLead(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().delete(
		'/leads/:leadId',
		{
			preHandler: requireAuth,
			schema: {
				tags: ['Leads'],
				summary: 'Delete a lead by ID',
				params: z.object({
					leadId: z.string(),
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
			const { leadId } = request.params as { leadId: string }
			await leadsService.deleteLead(leadId)
			return reply.status(204).send()
		},
	)
}

export async function leadsRoutes(app: FastifyInstance) {
	app.register(getLeads)
	app.register(getLead)
	app.register(createLead)
	app.register(updateLead)
	app.register(deleteLead)
}
