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
import { TripService } from './trip.service';
import { Prisma } from '.prisma/client';

@ApiTags('Trips')
@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  // TODO: bien spécifier le type de retour de la fonction et le type des données
  @Post()
  create(@Body() data: Prisma.StepCreateManyTripInput[]) {
    return this.tripService.create(data);
  }

  @Get()
  findAll() {
    return this.tripService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tripService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTripDto: Prisma.TripUpdateInput,
  ) {
    return this.tripService.update(id, updateTripDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tripService.remove(id);
  }
}
