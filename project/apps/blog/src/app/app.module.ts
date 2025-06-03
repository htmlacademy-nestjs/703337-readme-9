import { Module } from '@nestjs/common';
import {BlogCommentModule} from '@project/blog/comment';
import {BlogTagModule} from '@project/tag';
import {BlogPostModule} from '@project/blog/post';

@Module({
  imports: [BlogTagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
