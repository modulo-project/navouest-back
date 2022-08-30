import { Trip } from './trip.entity';
import { DriverAndVehicle } from './driverAndVehicle.entity';

export class Step {
  id: number;
  trip?: Trip | null;
  tripId: number | null;
  startedAt: Date;
  endedAt: Date;
  from: string;
  to: string;
  commentary: string | null;
  passengersCount: number | null;
  driverAndVehicle?: DriverAndVehicle[];
}
