import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UpdateDriverDto } from 'src/prisma-generated/update-driver.dto';
import { DriverService } from './driver.service';
import { CreateDriverDto } from '../prisma-generated/create-driver.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Drivers')
@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }

  @Get()
  findAll() {
    return this.driverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.driverService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.update(id, updateDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.driverService.remove(id);
  }
}
