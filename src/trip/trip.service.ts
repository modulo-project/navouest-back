import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { GoogleService } from 'src/google/google.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TripService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly googleService: GoogleService,
  ) {}
  async create(data: Prisma.StepCreateManyTripInput[]) {
    for (let i = 0; i < data.length; i++) {
      data[i].distance = await this.googleService.getDistance(
        data[i].from,
        data[i].to,
      );

      // If commentary exist save it to the database
      if (data[i].commentary) {
        data[i].commentary === data[i].commentary;
      }

      // Save number of passengers if exist
      if (data[i].passengersCount) {
        data[i].passengersCount === data[i].passengersCount;
      }
    }

    return this.prismaService.trip.create({
      data: { steps: { createMany: { data } } },
    });
  }

  findAll() {
    return this.prismaService.trip.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.trip.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, updateTripDto: Prisma.TripUpdateInput) {
    return this.prismaService.trip.update({
      where: { id: Number(id) },
      data: updateTripDto,
    });
  }

  remove(id: number) {
    return this.prismaService.trip.delete({ where: { id: Number(id) } });
  }
}
