import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Administrador } from 'apps/databasems/src/entities/administrator.entity';
import { Actividad } from 'apps/databasems/src/entities/activity.entity';
import { Empresa } from 'apps/databasems/src/entities/enterprise.entity';
import { Registro } from 'apps/databasems/src/entities/register.entity';
import { Premio } from 'apps/databasems/src/entities/reward.entity';
import { Usuario } from 'apps/databasems/src/entities/user.entity';
import { LoginModule } from './login/login.module';
const config = require('../../../config.js');


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.HOSTDB,
      port: config.PORTDB,
      username: config.USERDB,
      password: config.PASSDB,
      database: config.DB,
      ssl: false,
      entities: [Actividad, Administrador, Empresa, Registro, Premio, Usuario],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10
    }),

    TypeOrmModule.forFeature([Actividad, Administrador, Empresa, Registro, Premio, Usuario]),
    PassportModule,
    JwtModule.register({
      secret: 'secretepowerfit',
      signOptions: {expiresIn: '1h'},
    }),
    LoginModule
  ],
controllers: [],
  providers: [],
})
export class OauthModule {}
