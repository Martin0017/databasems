import { Controller, Get } from '@nestjs/common';
import { OauthmobileService } from './oauthmobile.service';

@Controller()
export class OauthmobileController {
  constructor(private readonly oauthmobileService: OauthmobileService) {}

  @Get()
  getHello(): string {
    return this.oauthmobileService.getHello();
  }
}
