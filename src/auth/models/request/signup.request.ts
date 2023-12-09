import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class SignupRequest {
  @IsNotEmpty()
  @MaxLength(20)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
