/*
  Warnings:

  - Added the required column `statusId` to the `leads` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "statusTypeEnum" AS ENUM ('BACKLOG', 'TODO', 'IN_PROGRESS', 'COMPLETED', 'CANCELED');

-- AlterTable
ALTER TABLE "leads" ADD COLUMN     "statusId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "leadStatuses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" "statusTypeEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "leadStatuses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "leadStatuses_name_key" ON "leadStatuses"("name");

-- AddForeignKey
ALTER TABLE "leads" ADD CONSTRAINT "leads_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "leadStatuses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
