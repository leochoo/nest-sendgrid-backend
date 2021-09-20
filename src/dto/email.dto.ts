import { IsEmail, IsString } from 'class-validator';

export class EmailDto {
  @IsEmail()
  emailAddress: string;
  @IsString()
  name: string;
  templateId: string;
}
