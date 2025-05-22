import { Injectable } from '@nestjs/common';
import {BaseMemoryRepository} from '@project/data-access';
import { BlogCommentEntity } from './blog-comment.entity';
import { BlogCommentFactory } from './blog-comment.factory';

@Injectable()
export class BlogCommentRepository extends BaseMemoryRepository<BlogCommentEntity> {
  constructor(entityFactory: BlogCommentFactory) {
      super(entityFactory);
  }

  public async findByPostId(postId: string): Promise<BlogCommentEntity[] | null> {
    const entities = Array.from(this.entities.values());
    const commentsPost = entities.filter((entity) => entity.postId === postId);

    if (! commentsPost.length) {
      return null;
    }
    const comments = commentsPost.map((entity) => this.entityFactory.create(entity))
    return comments;
  }
}