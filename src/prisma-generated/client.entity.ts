import { Trip } from './trip.entity';

export class Client {
  id: number;
  name: string | null;
  email: string | null;
  phone: string | null;
  trips?: Trip[];
}
