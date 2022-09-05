import { Warehouse } from './warehouse.entity';
import { DriverAndVehicle } from './driverAndVehicle.entity';

export class Vehicle {
  id: number;
  model: string;
  capacity: number;
  warehouse?: Warehouse | null;
  warehouseId: number | null;
  driverAndVehicle?: DriverAndVehicle[];
}
