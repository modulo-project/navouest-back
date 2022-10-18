import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StepService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createStepDto: Prisma.StepCreateInput) {
    await this.prismaService.step.create({ data: createStepDto });
  }

  findAll() {
    return this.prismaService.step.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.step.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, updateStepDto: Prisma.StepUpdateInput) {
    return this.prismaService.step.update({
      where: { id: Number(id) },
      data: updateStepDto,
    });
  }

  remove(id: number) {
    return this.prismaService.step.delete({ where: { id: Number(id) } });
  }
}
