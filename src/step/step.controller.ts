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
import { StepService } from './step.service';
import { Prisma } from '@prisma/client';

@ApiTags('Steps')
@Controller('step')
export class StepController {
  constructor(private readonly stepService: StepService) {}

  @Post()
  create(@Body() createStepDto: Prisma.StepCreateInput) {
    return this.stepService.create(createStepDto);
  }

  @Get()
  findAll() {
    return this.stepService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.stepService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateStepDto: Prisma.StepUpdateInput,
  ) {
    return this.stepService.update(id, updateStepDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.stepService.remove(id);
  }
}
