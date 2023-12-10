import { Injectable } from '@nestjs/common';
import { Payment } from './payment';
import { PrismaService } from '../common/services/prisma.service';
import { EventService } from './event.service';

@Injectable()
export class PaymentService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private readonly prisma: PrismaService,
    private readonly event: EventService,
  ) {}

  public async getPaymentById(
    id: number,
    userId: number,
  ): Promise<Payment | null> {
    return this.prisma.payment.findFirst({
      where: { id, userId },
    });
  }

  public async create(payment: Payment): Promise<Payment | null> {
    const paymentEntity = await this.prisma.payment.create({
      data: {
        addressReceiver: payment.addressReceiver,
        chainId: payment.chainId,
        amount: Number(payment.amount),
        user: {
          connect: {
            id: payment.userId,
          },
        },
      },
    });

    await this.event.emit('payment.created', paymentEntity);

    return paymentEntity;
  }
}
