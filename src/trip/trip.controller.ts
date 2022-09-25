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

  // TODO: Passer les data en paramètres de la fonction create sans
  // oublier de bien spécifier le type de retour de la fonction et le type des données
  @Post()
  create() {
    return this.tripService.create();
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
