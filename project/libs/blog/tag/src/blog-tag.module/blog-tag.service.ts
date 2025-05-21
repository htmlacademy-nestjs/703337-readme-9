import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { BlogTagRepository } from './blog-tag.repository';
import { Tag } from '@project/shared/core';
import { CreateTagDto } from './dto/create-tag.dto';
import { BlogTagEntity } from './blog-tag.entity';

@Injectable()
export class BlogTagService {
  constructor(
    private readonly blogTagRepository: BlogTagRepository
  ) {}

  public async getTag(id: string): Promise<BlogTagEntity> {
    return (await this.blogTagRepository.findById(id));
  }

  public async createTag(dto: CreateTagDto): Promise<BlogTagEntity> {
    const existsTag = (await this.blogTagRepository.findByText(dto.text));
    if (existsTag) {
      throw new ConflictException('A tag with the text already exists');
    }

    const newTag = new BlogTagEntity(dto);
    await this.blogTagRepository.save(newTag);

    return newTag;
  }

  public async getAllTags(): Promise<Tag[]> {
    return await this.blogTagRepository.find();
  }

  public async deleteTag(id: string): Promise<void> {
    try {
      await this.blogTagRepository.deleteById(id);
    } catch {
      // TODO. Обратите внимание. Ошибки могут быть разными
      // Вы должны реагировать на них по-разному.
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
  }
}
