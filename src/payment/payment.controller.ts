import {
  Controller,
  HttpCode,
  HttpStatus,
  Body,
  Query,
  ParseIntPipe,
  Get,
  Post,
  UnauthorizedException,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Usr } from '../user/user.decorator';
import { AuthUser } from '../auth/auth-user';
import { PaymentService } from './payment.service';
import { NewPaymentRequest, PaymentResponse } from './models';
import { Payment } from '@prisma/client';

@ApiTags('payments')
@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiBearerAuth()
  @Get()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard())
  async get(
    @Query('id', ParseIntPipe) id: number,
    @Usr() user: AuthUser,
  ): Promise<PaymentResponse | null> {
    if (!user) {
      throw new UnauthorizedException();
    }

    const payment = await this.paymentService.getPaymentById(id, user.id);
    if (payment === null) {
      throw new BadRequestException();
    }

    return new PaymentResponse(payment);
  }

  @ApiBearerAuth()
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard())
  async signup(
    @Body() newPaymentRequest: NewPaymentRequest,
    @Usr() user: AuthUser,
  ): Promise<void> {
    if (!user) {
      throw new UnauthorizedException();
    }

    await this.paymentService.create({
      userId: user.id,
      ...newPaymentRequest,
    } as Payment);
  }
}
