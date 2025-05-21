import { Controller, Get, Param, Post, Body, Delete, Patch, HttpCode, HttpStatus } from '@nestjs/common';
import { BlogTagService } from './blog-tag.service';
import { CreateTagDto } from './dto/create-tag.dto';

@Controller('tags')
export class BlogTagController {
  constructor(
    private readonly blogTagService: BlogTagService
  ) {}

  @Get('/')
  public async index() {
    const blogTags = await this.blogTagService.getAllTags();
    //const tags = blogTagEntities.map((blogTag) => blogTag.toPOJO());
    return blogTags;
  }

  @Get('/:id')
  public async show(@Param('id') id: string) {
    const tagEntity = await this.blogTagService.getTag(id);
    return  tagEntity.toPOJO();
  }

  @Post('/')
  public async create(@Body() dto: CreateTagDto) {
    const newTag = await this.blogTagService.createTag(dto);
    return newTag.toPOJO();
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async destroy(@Param('id') id: string) {
    await this.blogTagService.deleteTag(id);
  }
}
