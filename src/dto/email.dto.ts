import { IsEmail } from 'class-validator';

export class EmailDto {
  @IsEmail()
  emailAddress: string;
}
