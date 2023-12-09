import { ApiProperty } from '@nestjs/swagger';
import { Payment } from '../../payment';

export class PaymentResponse {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  addressReceiver: string;

  @ApiProperty()
  chainId: number;

  @ApiProperty()
  amount: number;

  constructor(entity: Payment | null) {
    if (!entity) {
      throw new Error('Entity is empty');
    }

    Object.assign(this, entity);
  }
}
