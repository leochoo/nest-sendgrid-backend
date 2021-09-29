import { IsEmail, IsString, ValidateNested } from 'class-validator';

class ApplicantDto {
  @IsString()
  applicantName: string;
  @IsEmail()
  applicantEmail: string;
}

export class EmailDto {
  @IsEmail()
  fromEmail: string;
  @IsString()
  templateId: string;
  @ValidateNested()
  applicantArray: ApplicantDto[];
}
