import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VehicleService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createVehicleDto: Prisma.VehicleCreateInput) {
    return this.prismaService.vehicle.create({ data: createVehicleDto });
  }

  findAll() {
    return this.prismaService.vehicle.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.vehicle.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, updateVehicleDto: Prisma.VehicleUpdateInput) {
    return this.prismaService.vehicle.update({
      where: { id: Number(id) },
      data: updateVehicleDto,
    });
  }

  remove(id: number) {
    return this.prismaService.vehicle.delete({ where: { id: Number(id) } });
  }
}
