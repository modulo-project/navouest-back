import { Injectable } from '@nestjs/common';
import { CreateWarehouseDto } from 'src/prisma-generated/create-warehouse.dto';
import { UpdateWarehouseDto } from 'src/prisma-generated/update-warehouse.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WarehouseService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createWarehouseDto: CreateWarehouseDto) {
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

  update(id: number, updateWarehouseDto: UpdateWarehouseDto) {
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
