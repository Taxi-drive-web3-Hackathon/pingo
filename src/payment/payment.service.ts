import { Injectable } from '@nestjs/common';
import { Payment } from './models';

@Injectable()
export class PaymentService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public async getPaymentById(id: number): Promise<Payment> {
    return {
      id,
      amount: 100,
      addressReceiver: '0x1234567890',
      chainId: '1',
    };
  }
}
