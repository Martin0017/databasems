import { Module } from '@nestjs/common';
import { OauthmobileController } from './oauthmobile.controller';
import { OauthmobileService } from './oauthmobile.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { LoginModule } from './login/login.module';

@Module({
  imports: [LoginModule],
  controllers: [OauthmobileController, LoginController],
  providers: [OauthmobileService, LoginService],
})
export class OauthmobileModule {}
