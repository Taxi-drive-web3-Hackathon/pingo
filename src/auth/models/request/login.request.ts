import { IsNotEmpty } from 'class-validator';

export class LoginRequest {
  @IsNotEmpty()
  // name or email
  identifier: string;
}
