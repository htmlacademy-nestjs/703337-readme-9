import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClientService } from '@project/blog-models';

import { Tag } from '@project/shared/core';
import {BasePostgresRepository} from '@project/data-access';
import { BlogTagEntity } from './blog-tag.entity';
import { BlogTagFactory } from './blog-tag.factory';
import { TagFilter, tagFilterToPrismaFilter } from './blog-tag.filter';
import { MAX_TAG_LIMIT } from './blog-tag.constant';

@Injectable()
export class BlogTagRepository extends BasePostgresRepository<BlogTagEntity, Tag> {
  constructor(
    entityFactory: BlogTagFactory,
    readonly client: PrismaClientService,) {
    super(entityFactory, client);
  }

  public async save(entity: BlogTagEntity): Promise<void> {
    const aaa = entity.toPOJO();
    console.log(aaa)
    const record = await this.client.tag.create({
      data: { ...entity.toPOJO() }
    });

    entity.id = record.id;
  }

  public async findById(id: string): Promise<BlogTagEntity> {
    const document = await this.client.tag.findFirst({
      where: {
        id,
      },
    });

    if (! document) {
      throw new NotFoundException(`Tag with id ${id} not found.`);
    }

    return this.createEntityFromDocument(document);
  }

  public async find(filter?: TagFilter): Promise<BlogTagEntity[]> {
    const where = filter ?? tagFilterToPrismaFilter(filter);

    const documents = await this.client.tag.findMany({
      where,
      take: MAX_TAG_LIMIT
    });


    return documents.map((document) => this.createEntityFromDocument(document));
  }
  
  public async deleteById(id: string): Promise<void> {
    await this.client.tag.delete({
      where: {
        id,
      }
    });
  }

  public async update(entity: BlogTagEntity): Promise<void> {
    await this.client.tag.update({
      where: { id: entity.id },
      data: {
        text: entity.text,
      }
    });
  }

  public async findByIds(ids: string[]): Promise<BlogTagEntity[]> {
    const records = await this.client.tag.findMany({
      where: {
        id: {
          in: ids,
        }
      }
    });

    return records.map((record) => this.createEntityFromDocument(record));
  }

}
