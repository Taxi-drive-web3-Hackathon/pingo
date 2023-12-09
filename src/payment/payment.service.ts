import { Injectable } from '@nestjs/common';
import { Payment } from './payment';
import { PrismaService } from '../common/services/prisma.service';

@Injectable()
export class PaymentService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly prisma: PrismaService) {}

  public async getPaymentById(
    id: number,
    userId: number,
  ): Promise<Payment | null> {
    return this.prisma.payment.findFirst({
      where: { id, userId },
    });
  }
}
