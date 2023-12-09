import { IsNotEmpty, IsUUID } from 'class-validator';

export class PaymentRequest {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}

export class NewPaymentRequest {
  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  addressReceiver: string;

  @IsNotEmpty()
  chainId: number;
}
