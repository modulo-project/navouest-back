import { Etape } from './etape.entity';
import { Client } from './client.entity';

export class Trajet {
  id: number;
  etapes?: Etape[];
  Client?: Client | null;
  clientId: number | null;
}
