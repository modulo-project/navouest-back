import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClientService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createClientDto: Prisma.ClientCreateInput) {
    return this.prismaService.client.create({ data: createClientDto });
  }

  findAll() {
    return this.prismaService.client.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.client.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, updateClientDto: Prisma.ClientUpdateInput) {
    return this.prismaService.client.update({
      where: { id: Number(id) },
      data: updateClientDto,
    });
  }

  remove(id: number) {
    return this.prismaService.client.delete({ where: { id: Number(id) } });
  }
}
