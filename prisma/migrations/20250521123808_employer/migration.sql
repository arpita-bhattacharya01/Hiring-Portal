-- CreateTable
CREATE TABLE `Employer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `companyname` VARCHAR(191) NULL,
    `hiringfor` VARCHAR(191) NULL,
    `industry` VARCHAR(191) NULL,
    `employes` INTEGER NULL,
    `designation` VARCHAR(191) NULL,
    `pincode` INTEGER NULL,
    `companyaddress` VARCHAR(191) NULL,

    UNIQUE INDEX `Employer_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
