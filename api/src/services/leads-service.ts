import type { Lead } from '@prisma/client'
import type z from 'zod'
import type {
	createLeadSchema,
	updateLeadSchema,
} from '@/common/schemas/lead-schemas'
import { prisma } from '@/utils/prisma'

type LeadCreateInput = z.infer<typeof createLeadSchema>
type LeadUpdateInput = z.infer<typeof updateLeadSchema>

export class LeadsService {
	async getLeads(): Promise<Lead[]> {
		return prisma.lead.findMany()
	}

	async getLead(leadId: string): Promise<Lead> {
		const lead = await prisma.lead.findUnique({
			where: { id: leadId },
		})

		if (!lead) {
			throw new Error('Lead not found or not exists!')
		}

		return lead
	}

	async createLead(leadCreateInput: LeadCreateInput): Promise<Lead> {
		const leadData = {
			name: leadCreateInput.name,
			email: leadCreateInput.email?.toLocaleLowerCase().trim(),
			phone: leadCreateInput.phone,
			company: leadCreateInput.company,
		}

		const leadCreate = await prisma.lead.create({
			data: leadData,
		})

		return leadCreate
	}

	async updateLead(
		leadId: string,
		leadUpdateInput: LeadUpdateInput,
	): Promise<boolean> {
		const lead = await prisma.lead.findUnique({
			where: { id: leadId },
		})

		if (!lead) {
			throw new Error('Lead not found or not exists!')
		}

		await prisma.lead.update({
			where: { id: leadId },
			data: {
				...leadUpdateInput,
			},
		})

		return true
	}

	async deleteLead(leadId: string): Promise<boolean> {
		const lead = await prisma.lead.findUnique({
			where: { id: leadId },
		})

		if (!lead) {
			throw new Error('Lead not found or not exists!')
		}

		await prisma.lead.delete({
			where: { id: leadId },
		})

		return true
	}
}
