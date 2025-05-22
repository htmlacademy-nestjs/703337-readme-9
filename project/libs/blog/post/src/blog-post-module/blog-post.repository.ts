import { Injectable } from '@nestjs/common';
import {BaseMemoryRepository} from '@project/data-access';
import { BlogPostEntity } from './blog-post.entity';
import { BlogPostFactory } from './blog-post.factory';
import { PostTypeUnion } from '@project/shared/core';

@Injectable()
export class BlogPostRepository extends BaseMemoryRepository<BlogPostEntity> {
  constructor(
    entityFactory: BlogPostFactory) {
    super(entityFactory)
  }

  public async find(): Promise<PostTypeUnion[]> {
    const postsPOJO = Array.from(this.entities.values());
    return postsPOJO;
  }

}
