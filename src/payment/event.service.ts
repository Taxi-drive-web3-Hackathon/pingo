import { Injectable } from '@nestjs/common';
import { Payment } from './payment';
import { ethers } from 'ethers';

@Injectable()
export class EventService {
  async emit(eventName: string, payment: Payment): Promise<void> {
    console.log(`Event ${eventName} emitted`);
    console.log(payment);
  }
}
