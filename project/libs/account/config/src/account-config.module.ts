import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import  applicationConfig  from './configurations/app.config';
import mongoConfig from './configurations/mongo.config';
import jwtConfig from './configurations/jwt.config';
import rabbitConfig from './configurations/rabbit.config';

const ENV_USERS_FILE_PATH = 'apps/account/account.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [applicationConfig, mongoConfig, jwtConfig, rabbitConfig],
      envFilePath: ENV_USERS_FILE_PATH
    }),
  ]
})
export class AccountConfigModule {}
