import { Module } from '@nestjs/common';
import { StepService } from './step.service';
import { StepController } from './step.controller';
import { GoogleModule } from '../google/google.module';

@Module({
  controllers: [StepController],
  providers: [StepService],
  imports: [GoogleModule],
})
export class StepModule {}
