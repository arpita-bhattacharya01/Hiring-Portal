/*
  Warnings:

  - You are about to drop the column `fullname` on the `employer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `employer` DROP COLUMN `fullname`,
    ADD COLUMN `fullName` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `heading` VARCHAR(191) NULL;
