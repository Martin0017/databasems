import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PointsModule } from './points/points.module';
import { UseractivityModule } from './useractivity/useractivity.module';
import { ClaimedrewardsModule } from './claimedrewards/claimedrewards.module';
import { SupportmessageModule } from './supportmessage/supportmessage.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin1726:Disturber1726@powerfitlogs.ubnq4yr.mongodb.net/?retryWrites=true&w=majority'),
    PointsModule, UseractivityModule, ClaimedrewardsModule, SupportmessageModule],
  controllers: [],
  providers: [],
})
export class PowerfitregistersModule {}
