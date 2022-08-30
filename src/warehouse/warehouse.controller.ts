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
import { CreateWarehouseDto } from 'src/prisma-generated/create-warehouse.dto';
import { UpdateWarehouseDto } from 'src/prisma-generated/update-warehouse.dto';
import { WarehouseService } from './warehouse.service';

@ApiTags('Warehouses')
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Post()
  create(@Body() createWarehouseDto: CreateWarehouseDto) {
    return this.warehouseService.create(createWarehouseDto);
  }

  @Get()
  findAll() {
    return this.warehouseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.warehouseService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateWarehouseDto: UpdateWarehouseDto,
  ) {
    return this.warehouseService.update(id, updateWarehouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.warehouseService.remove(id);
  }
}
