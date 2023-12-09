import { IsNotEmpty, IsUUID } from 'class-validator';

export class PaymentRequest {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}

export class NewPaymentRequest {
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  addressReceiver: string;

  @IsNotEmpty()
  chainId: number;
}
