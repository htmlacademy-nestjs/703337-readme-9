import { Body, Controller, Delete, Get, HttpStatus, HttpCode, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import {fillDto} from '@project/shared/helpers';
//import { CreateCommentDto, CommentRdo } from '@project/blog/comment';
import { BlogPostService } from './blog-post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { BlogPostRdo } from './rdo/blog-post.rdo';
import { Comment } from '@project/shared/core';
import { BlogPostQuery } from './blog-post.query';
import { BlogPostWithPaginationRdo } from './rdo/blog-post-with-pagination.rdo';
import { UpdatePostDto } from './dto/update-post.dto';
import {CheckTypeGuard} from '../../../guards/check-type.guard';

@Controller('posts')
export class BlogPostController {
  constructor (
    private readonly blogPostService: BlogPostService,
  ) {}

  @Get('/:id')
  public async show(@Param('id') id: string) {
    const post = await this.blogPostService.getPost(id);
    return fillDto(BlogPostRdo, post.toPOJO());
  }

  @Get('/')
  public async index(@Query() query: BlogPostQuery) {
    const postsWithPagination = await this.blogPostService.getAllPosts(query);    
    const result = {
      ...postsWithPagination,
      entities: postsWithPagination.entities.map((post) => post.toPOJO()),
    }
    return fillDto(BlogPostWithPaginationRdo, result);
  }
  
  @UseGuards(CheckTypeGuard)
  @Post('/')
  public async create(@Body() dto: CreatePostDto) {
    //console.log(dto);
    const newPost = await this.blogPostService.createPost(dto);
    return fillDto(BlogPostRdo, newPost.toPOJO());
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async destroy(@Param('id') id: string) {
    await this.blogPostService.deletePost(id);
  }

  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    const updatedPost = await this.blogPostService.updatePost(id, dto);
    return fillDto(BlogPostRdo, updatedPost.toPOJO());
  }

  @Post('/:postId/comments')
  public async createComment(@Param('postId') postId: string, @Body() dto: Comment) {
    const newComment = await this.blogPostService.addComment(postId, dto);
    return newComment.toPOJO();
  }
}
