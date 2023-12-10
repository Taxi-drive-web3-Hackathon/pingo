import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PaymentService } from './payment.service';
import { EventService } from './event.service';
import { PrismaService } from '../common/services/prisma.service';
import { PaymentController } from './payment.controller';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [PaymentService, EventService, PrismaService],
  exports: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
