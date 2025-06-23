import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PostType } from '@project/shared/core';
import { PaginationResult } from '@project/shared/core';


import { BlogPostRepository } from './blog-post.repository';
import { BlogPostEntity } from './blog-post.entity';
import { BlogPostQuery } from './blog-post.query';
import { BlogPostFactory } from './blog-post.factory';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

import {BlogTagService} from '@project/tag';
import {BlogCommentFactory, BlogCommentRepository, BlogCommentEntity} from '@project/blog/comment';
import { Comment } from '@project/shared/core';

@Injectable()
export class BlogPostService {
  constructor(
    private readonly blogPostRepository: BlogPostRepository,    
    private readonly blogTagService: BlogTagService,
    private readonly blogCommentRepository: BlogCommentRepository,
    private readonly blogCommentFactory: BlogCommentFactory,
  ) {}

  public async getAllPosts(query?: BlogPostQuery): Promise<PaginationResult<BlogPostEntity>> {
    return this.blogPostRepository.find(query);
  }

  public async createPost(dto: CreatePostDto): Promise<BlogPostEntity> {
    const tags = await this.blogTagService.getTagsByIds(dto.tags);
    
    try{
      if(dto.type === PostType.Text && (!dto.preview || !dto.name || !dto.message)){
       throw new Error();
      }
      const newPost = BlogPostFactory.createFromCreatePostDto(dto, tags);
    
    await this.blogPostRepository.save(newPost);

    return newPost;
    }catch{
      throw new BadRequestException(`Post type ${dto.type} must have field preview, name, message.`);
    }
      
    
    
  }

  public async deletePost(id: string): Promise<void> {
    try {
      await this.blogPostRepository.deleteById(id);
    } catch {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
  }

  public async getPost(id: string): Promise<BlogPostEntity> {
    return this.blogPostRepository.findById(id);
  }

  public async updatePost(id: string, dto: UpdatePostDto): Promise<BlogPostEntity> {
    const existsPost = await this.blogPostRepository.findById(id);
    let isSameTags = true;
    let hasChanges = false;

    for (const [key, value] of Object.entries(dto)) {
      if (value !== undefined && key !== 'tags' && existsPost[key] !== value) {
        existsPost[key] = value;
        hasChanges = true;
      }

      if (key === 'tags' && value) {
        const currentTagIds = existsPost.tags.map((tag) => tag.id);
        isSameTags = currentTagIds.length === value.length &&
          currentTagIds.some((tagId) => value.includes(tagId));

        if (! isSameTags) {
          existsPost.tags = await this.blogTagService.getTagsByIds(dto.tags);
        }
      }
    }

    if (isSameTags && ! hasChanges) {
      return existsPost;
    }

    await this.blogPostRepository.update(existsPost);

    return existsPost;
  }

  public async addComment(postId: string, dto: Comment): Promise<BlogCommentEntity> {
     const existsPost = await this.getPost(postId);
     const newComment = this.blogCommentFactory.create(dto);
     if(existsPost){
       await this.blogCommentRepository.save(newComment);
       return newComment;
     }    
   }
}
