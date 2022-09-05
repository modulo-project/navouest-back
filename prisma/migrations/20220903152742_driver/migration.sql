-- DropIndex
DROP INDEX `Driver_warehouseId_fkey` ON `driver`;

-- AlterTable
ALTER TABLE `driver` MODIFY `status` BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_warehouseId_fkey` FOREIGN KEY (`warehouseId`) REFERENCES `Warehouse`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
