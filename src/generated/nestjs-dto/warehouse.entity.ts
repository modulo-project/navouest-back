import { Driver } from './driver.entity';

export class Warehouse {
  id: number;
  adresse: string;
  driver?: Driver[];
}
