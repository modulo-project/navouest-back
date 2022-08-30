import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from 'src/prisma-generated/create-vehicle.dto';
import { UpdateVehicleDto } from 'src/prisma-generated/update-vehicle.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VehicleService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.prismaService.vehicle.create({ data: createVehicleDto });
  }

  findAll() {
    return this.prismaService.vehicle.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.vehicle.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return this.prismaService.vehicle.update({
      where: { id: Number(id) },
      data: updateVehicleDto,
    });
  }

  remove(id: number) {
    return this.prismaService.vehicle.delete({ where: { id: Number(id) } });
  }
}
