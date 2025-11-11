import type { LeadStatus } from '@prisma/client'
import type z from 'zod'
import type {
	createLeadStatusSchema,
	updateLeadStatusSchema,
} from '@/common/schemas/lead-status-schemas'
import { prisma } from '@/utils/prisma'

type LeadStatusCreateInput = z.infer<typeof createLeadStatusSchema>
type LeadStatusUpdateInput = z.infer<typeof updateLeadStatusSchema>

export class LeadStatusService {
	async getLeadStatuses(): Promise<LeadStatus[]> {
		return prisma.leadStatus.findMany()
	}

	async getLeadStatus(leadStatusId: string): Promise<LeadStatus> {
		const leadStatus = await prisma.leadStatus.findUnique({
			where: { id: leadStatusId },
		})

		if (!leadStatus) {
			throw new Error('Lead status not found or not exists!')
		}

		return leadStatus
	}

	async createLeadStatus(
		leadStatusCreateInput: LeadStatusCreateInput,
	): Promise<LeadStatus> {
		const leadStatusData = {
			name: leadStatusCreateInput.name,
			description: leadStatusCreateInput.description,
			type: leadStatusCreateInput.type,
		}

		const leadStatusCreate = await prisma.leadStatus.create({
			data: leadStatusData,
		})

		return leadStatusCreate
	}

	async updateLeadStatus(
		leadStatusId: string,
		leadStatusUpdateInput: LeadStatusUpdateInput,
	): Promise<boolean> {
		const leadStatus = await prisma.leadStatus.findUnique({
			where: { id: leadStatusId },
		})

		if (!leadStatus) {
			throw new Error('Lead status not found or not exists!')
		}

		await prisma.leadStatus.update({
			where: { id: leadStatusId },
			data: {
				...leadStatusUpdateInput,
			},
		})

		return true
	}

	async deleteLeadStatus(leadStatusId: string): Promise<boolean> {
		const leadStatus = await prisma.leadStatus.findUnique({
			where: { id: leadStatusId },
		})

		if (!leadStatus) {
			throw new Error('Lead status not found or not exists!')
		}

		await prisma.leadStatus.delete({
			where: { id: leadStatusId },
		})

		return true
	}
}
