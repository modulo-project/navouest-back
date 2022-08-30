import { Trajet } from './trajet.entity';
import { DriverAndVehicle } from './driverAndVehicle.entity';

export class Etape {
  id: number;
  Trajet?: Trajet | null;
  trajetId: number | null;
  startedAt: Date;
  endedAt: Date;
  from: string;
  to: string;
  commentary: string | null;
  passengersCount: number | null;
  driverAndVehicle?: DriverAndVehicle[];
}
