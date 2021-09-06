import { SendGridService } from '@anchan828/nest-sendgrid';
import { Controller, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly sendGrid: SendGridService) {}

  @Post()
  async root(): Promise<void> {
    await this.sendGrid.send({
      to: 'leochootest@gmail.com',
      from: 'leochootest@gmail.com',
      templateId: 'd-43903e12c5a241959a1f60bb52564a59',
      dynamicTemplateData: {
        subject: 'Testing Templates',
        name: 'Some One',
        city: 'Denver',
      },
    });
  }
}
