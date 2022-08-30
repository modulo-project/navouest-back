import { Injectable } from '@nestjs/common';
import { CreateClientDto } from 'src/prisma-generated/create-client.dto';
import { UpdateClientDto } from 'src/prisma-generated/update-client.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createClientDto: CreateClientDto) {
    return this.prismaService.client.create({ data: createClientDto });
  }

  findAll() {
    return this.prismaService.client.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.client.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.prismaService.client.update({
      where: { id: Number(id) },
      data: updateClientDto,
    });
  }

  remove(id: number) {
    return this.prismaService.client.delete({ where: { id: Number(id) } });
  }
}
