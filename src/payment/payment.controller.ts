import {
  Controller,
  HttpCode,
  HttpStatus,
  Query,
  ParseIntPipe,
  Get,
  UnauthorizedException,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Usr } from '../user/user.decorator';
import { AuthUser } from '../auth/auth-user';
import { PaymentService } from './payment.service';
import { PaymentResponse } from './models';

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
    if (id !== user.id) {
      throw new UnauthorizedException();
    }

    const payment = await this.paymentService.getPaymentById(id);
    if (payment === null) {
      throw new BadRequestException();
    }

    return new PaymentResponse(payment);
  }
}
