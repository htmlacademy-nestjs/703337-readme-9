import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogPostRepository } from './blog-post.repository';
import { BlogPostEntity } from './blog-post.entity';
//import { BlogPostFactory } from './blog-post.factory';
//import { CreatePostDto } from './dto/create-post-type.dto';

import {BlogTagService} from '@project/tag';
import {BlogCommentFactory, BlogCommentRepository, BlogCommentEntity} from '@project/blog/comment';
import { PostTypeUnion, Comment } from '@project/shared/core';

@Injectable()
export class BlogPostService {
  constructor(
    private readonly blogPostRepository: BlogPostRepository,
    private readonly blogPstFactory: BlogTagService,
    private readonly blogTagService: BlogTagService,
    private readonly blogCommentRepository: BlogCommentRepository,
    private readonly blogCommentFactory: BlogCommentFactory,
  ) {}

  public async getAllPosts(): Promise<PostTypeUnion[]> {
    return this.blogPostRepository.find();
  }

  public async createPost(dto: PostTypeUnion): Promise<BlogPostEntity> {
    //const categories = await this.blogTagService.getCategoriesByIds(dto.tags);
    const newPost = new BlogPostEntity(dto);
    await this.blogPostRepository.save(newPost);

    return newPost;
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

  // public async updatePost(id: string, dto: UpdatePostDto): Promise<BlogPostEntity> {
  //   const existsPost = await this.blogPostRepository.findById(id);
  //   let isSameCategories = true;
  //   let hasChanges = false;

  //   for (const [key, value] of Object.entries(dto)) {
  //     if (value !== undefined && key !== 'categories' && existsPost[key] !== value) {
  //       existsPost[key] = value;
  //       hasChanges = true;
  //     }

  //     if (key === 'categories' && value) {
  //       const currentCategoryIds = existsPost.categories.map((category) => category.id);
  //       isSameCategories = currentCategoryIds.length === value.length &&
  //         currentCategoryIds.some((categoryId) => value.includes(categoryId));

  //       if (! isSameCategories) {
  //         existsPost.categories = await this.blogCategoryService.getCategoriesByIds(dto.categories);
  //       }
  //     }
  //   }

  //   if (isSameCategories && ! hasChanges) {
  //     return existsPost;
  //   }

  //   await this.blogPostRepository.update(existsPost);

  //   return existsPost;
  // }

  public async addComment(postId: string, dto: Comment): Promise<BlogCommentEntity> {
    const existsPost = await this.getPost(postId);
    const newComment = this.blogCommentFactory.create(dto);
    if(existsPost){
      await this.blogCommentRepository.save(newComment);
      return newComment;
    }

    
  }
}
