import { Injectable } from '@nestjs/common';

import { EntityFactory, Post } from '@project/shared/core';

import { BlogPostEntity } from './blog-post.entity';
import { CreatePostDto } from './dto/create-post.dto'; 
import { BlogTagEntity } from 'libs/blog/tag/src/blog-tag.module/blog-tag.entity';  

@Injectable()
export class BlogPostFactory implements EntityFactory<BlogPostEntity> {
  public create(entityPlainData: Post): BlogPostEntity {
    return new BlogPostEntity(entityPlainData);
  }

  public static createFromCreatePostDto(dto: CreatePostDto, tags?: BlogTagEntity[]): BlogPostEntity {
    const entity = new BlogPostEntity();
    entity.tags = tags ?? [];
    entity.type = dto.type;
    
    entity.userId = dto.userId;
    entity.published = dto.published;
    entity.repost = dto.repost;
    entity.comments = [];
    entity.text = dto.text ?? undefined;
    entity.message = dto.message ?? undefined;
    entity.preview = dto.preview ?? undefined;
    entity.author = dto.author ?? undefined;
    entity.photoPath = dto.photoPath ?? undefined;
    entity.name = dto.name ?? undefined;
    entity.link = dto.link ?? undefined;
    entity.reference = dto.reference ?? undefined;
    entity.description = dto.author ?? undefined;

    return entity;
  }
}
