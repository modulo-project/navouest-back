import { Injectable } from '@nestjs/common';
import { CreateTripDto } from 'src/prisma-generated/create-trip.dto';
import { UpdateTripDto } from 'src/prisma-generated/update-trip.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TripService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTripDto: CreateTripDto) {
    return this.prismaService.trip.create({ data: createTripDto });
  }

  findAll() {
    return this.prismaService.trip.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.trip.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, updateTripDto: UpdateTripDto) {
    return this.prismaService.trip.update({
      where: { id: Number(id) },
      data: updateTripDto,
    });
  }

  remove(id: number) {
    return this.prismaService.trip.delete({ where: { id: Number(id) } });
  }
}
