import { SendGridService } from '@anchan828/nest-sendgrid';
import { Controller, Post, Body } from '@nestjs/common';
import { EmailDto } from './dto/email.dto';

@Controller()
export class AppController {
  constructor(private readonly sendGrid: SendGridService) {}

  @Post('send_email')
  async root(@Body() emailDto: EmailDto): Promise<void> {
    // console.log('Email arrays:', emailDto.applicantArray);
    // console.log('TemplateId: ', emailDto.templateId);

    const personalizedEmailArray = [];
    const applicantArray = emailDto.applicantArray;
    for (let i = 0; i < applicantArray.length; i++) {
      // strip whitespaces from applicant name and email address
      const sanitizedName = applicantArray[i].applicantName.trim();
      const sanitizedEmail = applicantArray[i].applicantEmail.trim();
      const personalizedEmailObject = {
        to: sanitizedEmail,
        dynamicTemplateData: {
          name: sanitizedName,
        },
      };
      personalizedEmailArray.push(personalizedEmailObject);
    }

    console.log('personalized', personalizedEmailArray);

    await this.sendGrid.send({
      personalizations: personalizedEmailArray,
      from: emailDto.fromEmail,
      templateId: emailDto.templateId,
    });
  }
}
