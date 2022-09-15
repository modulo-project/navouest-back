import { Injectable } from '@nestjs/common';
import { CreateStepDto } from 'src/prisma-generated/create-step.dto';
import { UpdateStepDto } from 'src/prisma-generated/update-step.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GoogleService } from '../google/google.service';

@Injectable()
export class StepService {
  constructor(
    private readonly prismaService: PrismaService,
    private googleService: GoogleService,
  ) {}

  async create(createStepDto: CreateStepDto) {
    const newStep = createStepDto;

    newStep.distance = await this.googleService.getDistance(
      createStepDto.from,
      createStepDto.to,
    );

    await this.prismaService.step.create({ data: newStep });
    return newStep;
  }

  findAll() {
    return this.prismaService.step.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.step.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, updateStepDto: UpdateStepDto) {
    return this.prismaService.step.update({
      where: { id: Number(id) },
      data: updateStepDto,
    });
  }

  remove(id: number) {
    return this.prismaService.step.delete({ where: { id: Number(id) } });
  }
}
