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
import { CreateTripDto } from 'src/prisma-generated/create-trip.dto';
import { UpdateTripDto } from 'src/prisma-generated/update-trip.dto';
import { TripService } from './trip.service';

@ApiTags('Trips')
@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Post()
  create(@Body() createTripDto: CreateTripDto) {
    return this.tripService.create(createTripDto);
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
  update(@Param('id') id: number, @Body() updateTripDto: UpdateTripDto) {
    return this.tripService.update(id, updateTripDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tripService.remove(id);
  }
}
