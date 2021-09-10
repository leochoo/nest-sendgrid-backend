import { SendGridService } from '@anchan828/nest-sendgrid';
import { Controller, Post, Body } from '@nestjs/common';
import { EmailDto } from './dto/email.dto';

@Controller()
export class AppController {
  constructor(private readonly sendGrid: SendGridService) {}

  @Post('send_email')
  async root(@Body() emailDto: EmailDto): Promise<void> {
    console.log('EmailDTO has', emailDto.emailAddress);
    await this.sendGrid.send({
      to: emailDto.emailAddress,
      from: 'leochootest@gmail.com',
      templateId: 'd-43903e12c5a241959a1f60bb52564a59',
      dynamicTemplateData: {
        name: emailDto.name,
        subject: emailDto.subject,
        message: emailDto.message,
      },
    });
  }
}
