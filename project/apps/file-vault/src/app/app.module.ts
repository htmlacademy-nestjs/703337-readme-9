import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {FileUploaderModule} from '@project/file-vault-uploader'
import { FileVaultConfigModule, getMongooseOptions } from '@project/file-vault-config';

@Module({
  imports: [FileUploaderModule, FileVaultConfigModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


