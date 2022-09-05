import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWarehouseDto } from 'src/generated/nestjs-dto/create-warehouse.dto';
import { UpdateWarehouseDto } from 'src/generated/nestjs-dto/update-warehouse.dto';
// import { Prisma, Warehouse } from '@prisma/client';

@Injectable()
export class WarehouseService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.warehouse.findMany();
  }

  findOne(id: number) {
    return this.prismaService.warehouse.findUnique({
      where: { id: Number(id) },
    });
  }

  create(createWarehouseDto: CreateWarehouseDto) {
    this.prismaService.warehouse.create({ data: createWarehouseDto });
  }

  update(id: number, updateWarehouseDto: UpdateWarehouseDto) {
    this.prismaService.warehouse.update({
      where: { id: Number(id) },
      data: updateWarehouseDto,
    });
  }

  remove(id: number) {
    this.prismaService.warehouse.delete({ where: { id: Number(id) } });
  }
}
