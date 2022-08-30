import { Status } from '@prisma/client';
import { Warehouse } from './warehouse.entity';
import { DriverAndVehicle } from './driverAndVehicle.entity';

export class Driver {
  id: number;
  name: string;
  status: Status;
  warehouse?: Warehouse | null;
  warehouseId: number | null;
  DriverAndVehicle?: DriverAndVehicle[];
}
