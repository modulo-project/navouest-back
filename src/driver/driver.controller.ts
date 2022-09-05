import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateDriverDto } from 'src/generated/nestjs-dto/create-driver.dto';
import { UpdateDriverDto } from 'src/generated/nestjs-dto/update-driver.dto';
import { DriverService } from './driver.service';

@ApiTags('driver')
@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  findAll() {
    return this.driverService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.driverService.findOne(id);
  }

  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.update(id, updateDriverDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.driverService.remove(id);
  }
}
