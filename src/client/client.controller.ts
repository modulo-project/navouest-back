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
import { CreateClientDto } from 'src/prisma-generated/create-client.dto';
import { UpdateClientDto } from 'src/prisma-generated/update-client.dto';
import { ClientService } from './client.service';

@ApiTags('Clients')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clientService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clientService.remove(id);
  }
}
