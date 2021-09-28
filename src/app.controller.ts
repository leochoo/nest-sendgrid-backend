import { SendGridService } from '@anchan828/nest-sendgrid';
import { Controller, Post, Body } from '@nestjs/common';
import { EmailDto } from './dto/email.dto';

@Controller()
export class AppController {
  constructor(private readonly sendGrid: SendGridService) {}

  @Post('send_email')
  async root(@Body() emailDto: EmailDto): Promise<void> {
    console.log('EmailDTO has', emailDto.applicantEmail);
    console.log('TemplateId has', emailDto.templateId);

    await this.sendGrid.send({
      to: emailDto.applicantEmail,
      from: emailDto.fromEmail,
      templateId: emailDto.templateId,
      dynamicTemplateData: {
        name: emailDto.applicantName,
      },
    });
  }
}
