import { Entity } from '@project/shared/core';
//import { Comment } from '@project/shared/core';
import { StorableEntity, PostType} from '@project/shared/core';
import {BlogTagFactory, BlogTagEntity} from '@project/tag';
import { BlogCommentFactory, BlogCommentEntity } from '@project/blog/comment';

import { Post } from '@project/shared/core';
//import { Post } from '@prisma/client';

export class BlogPostEntity extends Entity implements StorableEntity<Post> {
  
  public userId: string;
  public type: PostType;
  public createdAt?: Date;
  public updatedAt?: Date;
  
  public repost: boolean;
  public published: boolean;
  public likes?: [];
  public comments: BlogCommentEntity[];
  public tags?: BlogTagEntity[];

  public text: string;
  public message: string;
  public preview: string;
  public author: string;
  public photoPath: string;
  public name: string;
  public link: string;
  public reference: string
  public description: string;

  constructor(post?: Post) {
    super();
    this.populate(post)
  }

  public toPOJO(): Post {
    const baseType = {
      id: this.id,
      userId: this.userId,
      type: this.type,
      
      repost: this.repost,
      published: this.published,
      likes: this.likes,
      comments: this.comments.map((commentEntity) => commentEntity.toPOJO()),
      tags: this.tags.map((tagEntity) => tagEntity.toPOJO())
    };

    switch(this.type){
      case PostType.Citation:
        return {
          ...baseType,
          text: this.text,
          author: this.author,
        }
        
      case PostType.Text:
        return {
          ...baseType,
          name: this.name,
          preview: this.preview,
          message: this.message,
        }
        
      case PostType.Video:
        return {
          ...baseType,
          name: this.name,
          link: this.link,
        }
      case PostType.Photo:
        return {
          ...baseType,
          photoPath: this.photoPath,
        }
      case PostType.Reference:
        return {
          ...baseType,
          reference: this.reference,
          description: this.description,
        }
    }
  }

  public populate(data: Post): void { 
    if (! data) {
      return;
    }
    //this.id = data.id ?? undefined;
    this.userId = data.userId;
    this.type = data.type;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.repost = data.repost;
    this.published = data.published;
    this.likes = [];
    this.comments = [];
    this.tags = [];

    switch(data.type){
      case PostType.Citation:
        this.text = data.text;
        this.author = data.author;
        break;
              
      case PostType.Text:        
        this.name = data.name;
        this.preview = data.preview;
        this.message = data.message;
        break;
        
      case PostType.Video:
        this.name = data.name;
        this.link = data.link;
        break;

      case PostType.Photo:        
        this.photoPath = data.photoPath;
        break;

      case PostType.Reference:
        this.reference = data.reference;
        this.description = data.description;
        
    }

    const blogCommentFactory = new BlogCommentFactory();
    for (const comment of data.comments) {
      const blogCommentEntity = blogCommentFactory.create(comment);
      this.comments.push(blogCommentEntity);
    }

    const blogTagFactory = new BlogTagFactory();
    for (const tag of data.tags) {
      const blogTagEntity = blogTagFactory.create(tag);
      console.log(blogTagEntity);
      this.tags.push(blogTagEntity);
    }
  }
}