import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
//import {fillDto} from '@project/shared/helpers';
//import { CreateCommentDto, CommentRdo } from '@project/blog/comment';
import { BlogPostService } from './blog-post.service';
//import { CreatePostDto } from './dto/create-post-type.dto';
//import { BlogPostRdo } from './rdo/blog-post.rdo';
import { PostTypeUnion, Comment } from '@project/shared/core';

@Controller('posts')
export class BlogPostController {
  constructor (
    private readonly blogPostService: BlogPostService,
  ) {}

  @Get('/')
  public async index() {
    const result = await this.blogPostService.getAllPosts();    
    return result;
  }

  @Get('/:id')
  public async show(@Param('id') id: string) {
    const post = await this.blogPostService.getPost(id);
    return  post.toPOJO();
  }
  
  @Post('/')
  public async create(@Body() dto: PostTypeUnion) {
    const newPost = await this.blogPostService.createPost(dto);
    return newPost.toPOJO();
  }

  @Delete('/:id')
  public async destroy(@Param('id') id: string) {
    await this.blogPostService.deletePost(id);
  }

  @Post('/:postId/comments')
  public async createComment(@Param('postId') postId: string, @Body() dto: Comment) {
    const newComment = await this.blogPostService.addComment(postId, dto);
    return newComment.toPOJO();
  }
}
