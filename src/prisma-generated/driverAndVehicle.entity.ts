import { Step } from './step.entity';
import { Vehicle } from './vehicle.entity';
import { Driver } from './driver.entity';

export class DriverAndVehicle {
  id: number;
  step?: Step | null;
  stepId: number | null;
  vehicle?: Vehicle | null;
  driver?: Driver | null;
  vehicleId: number | null;
  driverId: number | null;
}
