import { Warehouse } from './warehouse.entity';
import { DriverAndVehicle } from './driverAndVehicle.entity';

export class Vehicle {
  id: number;
  model: string;
  capacity: number;
  Warehouse?: Warehouse | null;
  warehouseId: number | null;
  DriverAndVehicle?: DriverAndVehicle[];
}
