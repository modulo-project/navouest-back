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
import { CreateStepDto } from 'src/prisma-generated/create-step.dto';
import { UpdateStepDto } from 'src/prisma-generated/update-step.dto';
import { StepService } from './step.service';

@ApiTags('Steps')
@Controller('step')
export class StepController {
  constructor(private readonly stepService: StepService) {}

  @Post()
  create(@Body() createStepDto: CreateStepDto) {
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
  update(@Param('id') id: number, @Body() updateStepDto: UpdateStepDto) {
    return this.stepService.update(id, updateStepDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.stepService.remove(id);
  }
}
