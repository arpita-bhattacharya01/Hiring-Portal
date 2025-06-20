/*
  Warnings:

  - Added the required column `Department` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openings` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `jobs` ADD COLUMN `Department` VARCHAR(191) NOT NULL,
    ADD COLUMN `openings` INTEGER NOT NULL,
    ADD COLUMN `posted` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'Pending',
    MODIFY `companyName` VARCHAR(191) NULL,
    MODIFY `salary` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `keySkills` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Education` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `education` VARCHAR(191) NOT NULL,
    `university` VARCHAR(191) NOT NULL,
    `course` VARCHAR(191) NOT NULL,
    `specialization` VARCHAR(191) NOT NULL,
    `startingYear` VARCHAR(191) NOT NULL,
    `endingYear` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Education` ADD CONSTRAINT `Education_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
