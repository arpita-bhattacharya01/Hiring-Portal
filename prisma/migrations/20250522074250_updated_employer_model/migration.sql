/*
  Warnings:

  - You are about to drop the column `email` on the `employer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[officialEmail]` on the table `Employer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[loginEmail]` on the table `Employer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `loginEmail` to the `Employer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `officialEmail` to the `Employer` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Employer_email_key` ON `employer`;

-- AlterTable
ALTER TABLE `employer` DROP COLUMN `email`,
    ADD COLUMN `loginEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `officialEmail` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Employer_officialEmail_key` ON `Employer`(`officialEmail`);

-- CreateIndex
CREATE UNIQUE INDEX `Employer_loginEmail_key` ON `Employer`(`loginEmail`);
