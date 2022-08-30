import { Injectable } from '@nestjs/common';
import { CreateStepDto } from 'src/prisma-generated/create-step.dto';
import { UpdateStepDto } from 'src/prisma-generated/update-step.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StepService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createStepDto: CreateStepDto) {
    return this.prismaService.step.create({ data: createStepDto });
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
