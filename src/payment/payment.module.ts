import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PaymentService } from './payment.service';
import { PrismaService } from '../common/services/prisma.service';
import { PaymentController } from './payment.controller';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [PaymentService, PrismaService],
  exports: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
