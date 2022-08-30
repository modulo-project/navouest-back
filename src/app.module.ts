import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { PrismaModule } from './prisma/prisma.module';
import { TripModule } from './trip/trip.module';
import { StepModule } from './step/step.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { DriverModule } from './driver/driver.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientModule,
    PrismaModule,
    TripModule,
    StepModule,
    VehicleModule,
    DriverModule,
    WarehouseModule,
  ],
})
export class AppModule {}
