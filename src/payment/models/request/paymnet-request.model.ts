import { IsNotEmpty, IsUUID } from 'class-validator';

export class PaymentRequest {
  @IsUUID()
  @IsNotEmpty()
  id?: string;
}
