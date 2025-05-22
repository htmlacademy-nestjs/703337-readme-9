import { Injectable } from '@nestjs/common';

import { EntityFactory } from '@project/shared/core';
import { PostTypeUnion } from '@project/shared/core';
import { BlogPostEntity } from './blog-post.entity';
import { CreatePostDto } from './dto/create-post-type.dto'; 
import { BlogTagEntity } from 'libs/blog/tag/src/blog-tag.module/blog-tag.entity';  

@Injectable()
export class BlogPostFactory implements EntityFactory<BlogPostEntity> {
  public create(entityPlainData: PostTypeUnion): BlogPostEntity {
    return new BlogPostEntity(entityPlainData);
  }

  public static createFromCreatePostDto(dto: CreatePostDto, tags: BlogTagEntity[]): BlogPostEntity {
    const entity = new BlogPostEntity();
    entity.tags = tags;
    entity.type = dto.type;
    entity.date = dto.date
    entity.postUser = dto.postUser;
    entity.likes = dto.likes;
    entity.comments = [];

    return entity;
  }
}
