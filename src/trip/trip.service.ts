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

  // TODO: Récupérer les données depuis le controller et les passer à la fonction pour récupérer
  // la distance de chaque étape avant de sauvegarder le trajet et toutes ses étapes
  async create() {
    const body: Prisma.StepCreateManyTripInput[] = [
      {
        startedAt: new Date(Date.now()),
        endedAt: new Date(Date.now()),
        from: 'Paris',
        to: 'Lyon',
      },
      {
        startedAt: new Date(Date.now()),
        endedAt: new Date(Date.now()),
        from: 'Lyon',
        to: 'Marseille',
      },
      {
        startedAt: new Date(Date.now()),
        endedAt: new Date(Date.now()),
        from: 'Marseille',
        to: 'Paris',
      },
    ];

    for (let i = 0; i < body.length; i++) {
      body[i].distance = await this.googleService.getDistance(
        body[i].from,
        body[i].to,
      );
    }

    const newTrip: Prisma.TripUncheckedCreateInput = {
      steps: {
        createMany: {
          data: body,
        },
      },
    };
    return this.prismaService.trip.create({ data: newTrip });
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
