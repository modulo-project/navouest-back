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
import { Client } from '@prisma/client';
import { CreateClientDto } from 'src/prisma-generated/create-client.dto';
import { UpdateClientDto } from 'src/prisma-generated/update-client.dto';
import { ClientService } from './client.service';

@ApiTags('Clients')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(
    @Body() createClientDto: CreateClientDto,
  ): Promise<Client | null> {
    return await this.clientService.create(createClientDto);
  }

  @Get()
  async findAll(): Promise<Client[] | null> {
    return await this.clientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Client | null> {
    return await this.clientService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateClientDto: UpdateClientDto,
  ): Promise<Client | null> {
    return await this.clientService.update(id, updateClientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Client | null> {
    return await this.clientService.remove(id);
  }
}
