import { Module } from '@nestjs/common';
import { BlogUserRepository } from './blog-user.repository';
import { BlogUserFactory } from './blog-user.factory';

@Module({
  providers: [BlogUserFactory, BlogUserRepository],
  exports:[BlogUserRepository]
})
export class BlogUserModule {}
