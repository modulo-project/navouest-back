export class CreateEtapeDto {
  startedAt: Date;
  endedAt: Date;
  from: string;
  to: string;
  commentary?: string;
  passengersCount?: number;
}
