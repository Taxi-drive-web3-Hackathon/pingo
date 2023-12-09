import { ApiProperty } from '@nestjs/swagger';

export class Payment {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  addressReceiver: string;

  @ApiProperty()
  chainId: string;

  @ApiProperty()
  amount: number;
}
