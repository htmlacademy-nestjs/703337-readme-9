import { Module } from '@nestjs/common';
import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';
import { BlogPostFactory } from './blog-post.factory';
import { BlogPostRepository } from './blog-post.repository';
import { BlogCommentModule } from '@project/blog/comment';
import { BlogTagModule } from '@project/tag';

@Module({
  imports:[BlogCommentModule, BlogTagModule],
  providers: [BlogPostService, BlogPostFactory, BlogPostRepository],
  exports:[BlogPostService],
  controllers:[BlogPostController]
})
export class BlogPostModule {}