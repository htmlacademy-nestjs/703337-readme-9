import { Module } from '@nestjs/common';

import { BlogTagRepository } from './blog-tag.repository';
import { BlogTagController } from './blog-tag.controller';
import { BlogTagService } from './blog-tag.service';
import { BlogTagFactory } from './blog-tag.factory';

@Module({
  
  providers: [BlogTagRepository, BlogTagService, BlogTagFactory],
  controllers: [BlogTagController],
  exports: [BlogTagService],
})
export class BlogTagModule {}