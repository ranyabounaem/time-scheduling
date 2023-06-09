import { Break } from 'src/modules/breaks/breaks.entity';
import { ServiceDay } from 'src/modules/service_days/serviceDays.entity';

export class CreateServiceInput {
  name: string;
  breaks: Break[];
  serviceDays: ServiceDay[];
  slotDuration: number;
  breakBetweenSlots: number;
  allowedBookingInterval: number;
  maxClientsPerSlot: number;
}
