import {Module} from '@nestjs/common';
import { BlogCommentFactory } from './blog-comment.factory';
import { BlogCommentController } from './blog-comment.controller';
import { BlogCommentRepository } from './blog-comment.repository';
import { BlogCommentService } from './blog-comment.service';

@Module({
  controllers: [BlogCommentController],
  providers: [BlogCommentService, BlogCommentRepository, BlogCommentFactory],
  exports: [BlogCommentRepository, BlogCommentFactory]
})
export class BlogCommentModule {}