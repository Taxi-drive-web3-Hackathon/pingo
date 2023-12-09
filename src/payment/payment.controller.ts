import {
  Controller,
  HttpCode,
  HttpStatus,
  Query,
  ParseIntPipe,
  Get,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Usr } from '../user/user.decorator';
import { AuthUser } from '../auth/auth-user';
import { PaymentService } from './payment.service';
import { Payment } from './models';

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
  ): Promise<Payment> {
    if (id !== user.id) {
      throw new UnauthorizedException();
    }

    return await this.paymentService.getPaymentById(id);
  }
}
