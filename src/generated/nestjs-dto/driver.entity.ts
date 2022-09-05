import { Warehouse } from './warehouse.entity';

export class Driver {
  id: number;
  name: string;
  status: boolean;
  warehouseId: number | null;
  Warehouse?: Warehouse | null;
}
