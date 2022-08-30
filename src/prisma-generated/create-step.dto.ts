export class CreateStepDto {
  startedAt: Date;
  endedAt: Date;
  from: string;
  to: string;
  commentary?: string;
  passengersCount?: number;
}
