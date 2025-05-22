import { Injectable, NotFoundException } from '@nestjs/common';
import { Tag } from '@project/shared/core';
import {BaseMemoryRepository} from '@project/data-access';
import { BlogTagEntity } from './blog-tag.entity';
import { BlogTagFactory } from './blog-tag.factory';
import { MAX_TAG_LIMIT } from './blog-tag.constant';

@Injectable()
export class BlogTagRepository extends BaseMemoryRepository<BlogTagEntity> {
  constructor(
    entityFactory: BlogTagFactory) {
    super(entityFactory);
  }

  public async find(): Promise<Tag[]> {
    const entities = Array.from(this.entities.values());
    return entities;
  }

  public async findByText(text: string): Promise<Tag> {
    const tag = Array.from(this.entities.values()).filter((it) => it.text = text).at[0];
    return tag;
  }

  
  
}
