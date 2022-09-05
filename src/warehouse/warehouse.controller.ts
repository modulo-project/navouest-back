import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from 'src/generated/nestjs-dto/create-warehouse.dto';
import { UpdateWarehouseDto } from 'src/generated/nestjs-dto/update-warehouse.dto';

@ApiTags('warehouse')
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Get()
  findAll() {
    return this.warehouseService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.warehouseService.findOne(id);
  }

  @Post()
  create(@Body() createWarehouseDto: CreateWarehouseDto) {
    return this.warehouseService.create(createWarehouseDto);
  }

  @Patch('/:id')
  update(
    @Param('id') id: number,
    @Body() updateWarehouseDto: UpdateWarehouseDto,
  ) {
    return this.warehouseService.update(id, updateWarehouseDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.warehouseService.remove(id);
  }
}
