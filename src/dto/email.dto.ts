import { IsEmail, IsString } from 'class-validator';

export class EmailDto {
  @IsEmail()
  emailAddress: string;
  @IsString()
  name: string;
  subject: string;
  message: string;
}
