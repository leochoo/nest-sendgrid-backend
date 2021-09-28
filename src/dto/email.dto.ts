import { IsEmail, IsString } from 'class-validator';

export class EmailDto {
  @IsEmail()
  fromEmail: string;
  applicantEmail: string;
  @IsString()
  applicantName: string;
  templateId: string;
}
