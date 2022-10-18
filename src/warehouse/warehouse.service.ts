import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class WarehouseService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createWarehouseDto: Prisma.WarehouseCreateInput) {
    return this.prismaService.warehouse.create({ data: createWarehouseDto });
  }

  findAll() {
    return this.prismaService.warehouse.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.warehouse.findUnique({
      where: { id: Number(id) },
    });
  }

  update(id: number, updateWarehouseDto: Prisma.WarehouseUpdateInput) {
    return this.prismaService.warehouse.update({
      where: { id: Number(id) },
      data: updateWarehouseDto,
    });
  }

  remove(id: number) {
    return this.prismaService.warehouse.delete({
      where: { id: Number(id) },
    });
  }
}
