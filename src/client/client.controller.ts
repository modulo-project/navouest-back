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
import { Client, Prisma } from '@prisma/client';
import { ClientService } from './client.service';

@ApiTags('Clients')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(
    @Body() createClientDto: Prisma.ClientCreateInput,
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
    @Body() updateClientDto: Prisma.ClientUpdateInput,
  ): Promise<Client | null> {
    return await this.clientService.update(id, updateClientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Client | null> {
    return await this.clientService.remove(id);
  }
}
