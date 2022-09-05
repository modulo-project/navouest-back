import { Step } from './step.entity';
import { Client } from './client.entity';

export class Trip {
  id: number;
  steps?: Step[];
  client?: Client | null;
  clientId: number | null;
}
