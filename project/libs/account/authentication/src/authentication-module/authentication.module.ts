import { Module } from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';

import {BlogUserModule} from '@project/blog-user';
import {getJwtOptions} from '@project/account-config';


//import { JwtAccessStrategy } from '../strategies/jwt-access.strategy';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { NotifyModule } from '@project/account-notify';

@Module({
  imports: [
    BlogUserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    NotifyModule
  ],
  controllers:[AuthenticationController],
  providers: [AuthenticationService, 
    //JwtAccessStrategy,
    ]
})
export class AuthenticationModule {}
