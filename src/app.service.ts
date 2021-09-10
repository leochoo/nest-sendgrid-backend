import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getConnection(): string {
    return 'Backend Connected!';
  }
}
