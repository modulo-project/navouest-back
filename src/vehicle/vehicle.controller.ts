import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateVehicleDto } from 'src/prisma-generated/create-vehicle.dto';
import { UpdateVehicleDto } from 'src/prisma-generated/update-vehicle.dto';
import { VehicleService } from './vehicle.service';

@ApiTags('Vehicles')
@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.vehicleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleService.update(id, updateVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.vehicleService.remove(id);
  }
}
