/*
  Warnings:

  - Made the column `name` on table `driver` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `driver` required. This step will fail if there are existing NULL values in that column.
  - Made the column `adresse` on table `warehouse` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Driver_warehouseId_fkey` ON `driver`;

-- AlterTable
ALTER TABLE `driver` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `status` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `warehouseId` INTEGER NULL;

-- AlterTable
ALTER TABLE `warehouse` MODIFY `adresse` VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_warehouseId_fkey` FOREIGN KEY (`warehouseId`) REFERENCES `Warehouse`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
