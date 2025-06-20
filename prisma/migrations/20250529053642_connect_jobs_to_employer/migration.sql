-- CreateTable
CREATE TABLE `Jobs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jobTitle` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `salary` INTEGER NOT NULL,
    `experience` INTEGER NOT NULL,
    `jobType` VARCHAR(191) NOT NULL,
    `skills` VARCHAR(191) NOT NULL,
    `jobDiscription` VARCHAR(191) NOT NULL,
    `requirement` VARCHAR(191) NOT NULL,
    `benifit` VARCHAR(191) NOT NULL,
    `employerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Jobs` ADD CONSTRAINT `Jobs_employerId_fkey` FOREIGN KEY (`employerId`) REFERENCES `Employer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
