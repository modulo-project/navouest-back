import { Vehicle } from './vehicle.entity';
import { Driver } from './driver.entity';

export class Warehouse {
  id: number;
  adress: string;
  vehicles?: Vehicle[];
  driver?: Driver[];
}
