import { Injectable } from '@nestjs/common';

@Injectable()
export class OauthmobileService {
  getHello(): string {
    return 'Hello World!';
  }
}
