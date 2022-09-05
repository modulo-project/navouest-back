import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from 'src/generated/nestjs-dto/create-driver.dto';
import { UpdateDriverDto } from 'src/generated/nestjs-dto/update-driver.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DriverService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.driver.findMany();
  }

  findOne(id: number) {
    return this.prismaService.driver.findUnique({ where: { id: Number(id) } });
  }

  create(createDriverDto: CreateDriverDto) {
    this.prismaService.driver.create({ data: createDriverDto });
  }

  update(id: number, updateDriverDto: UpdateDriverDto) {
    this.prismaService.driver.update({
      where: { id: Number(id) },
      data: updateDriverDto,
    });
  }

  remove(id: number) {
    this.prismaService.driver.delete({ where: { id: Number(id) } });
  }
}
