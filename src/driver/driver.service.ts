import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDriverDto } from '../prisma-generated/create-driver.dto';
import { UpdateDriverDto } from 'src/prisma-generated/update-driver.dto';

@Injectable()
export class DriverService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDriverDto: CreateDriverDto) {
    return this.prismaService.driver.create({ data: createDriverDto });
  }

  findAll() {
    return this.prismaService.driver.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.driver.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, updateDriverDto: UpdateDriverDto) {
    return this.prismaService.driver.update({
      where: { id: Number(id) },
      data: updateDriverDto,
    });
  }

  remove(id: number) {
    return this.prismaService.driver.delete({ where: { id: Number(id) } });
  }
}
