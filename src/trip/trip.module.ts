import { Module } from '@nestjs/common';
import { TripService } from './trip.service';
import { TripController } from './trip.controller';
import { GoogleService } from 'src/google/google.service';

@Module({
  controllers: [TripController],
  providers: [TripService, GoogleService],
  imports: [GoogleService],
})
export class TripModule {}
