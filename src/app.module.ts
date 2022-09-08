import { Module } from '@nestjs/common';
import { DriverModule } from './driver/driver.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { WarehouseModule } from './warehouse/warehouse.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DriverModule,
    PrismaModule,
    WarehouseModule,
  ],
})
export class AppModule {}
