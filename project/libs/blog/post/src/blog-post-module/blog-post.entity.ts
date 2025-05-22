import { Entity, AuthUser, Tag } from '@project/shared/core';
import { Comment } from '@project/shared/core';
import { StorableEntity, PostType} from '@project/shared/core';
import {BlogTagFactory} from '../../../tag/src/blog-tag.module/blog-tag.factory';
import { BlogCommentFactory } from '@project/blog/comment';

import { PostTypeUnion } from '@project/shared/core';

export class BlogPostEntity extends Entity implements StorableEntity<PostTypeUnion> {
  
  public postUser: AuthUser;
  public type: PostType;
  public date: string;
  public repost: boolean;
  public published: boolean;
  public likes: number;
  public comments: Comment[];
  public tags?: Tag[];

  public text: string;
  public message: string;
  public preview: string;
  public author: string;
  public photoPath: string;
  public name: string;
  public link: string;
  public reference: string
  public description: string;

  constructor(post?: PostTypeUnion) {
    super();
    this.populate(post)
  }

  public toPOJO(): PostTypeUnion {
    const baseType = {
      id: this.id,
      postUser: this.postUser,
      type: this.type,
      date: this.date,
      repost: this.repost,
      published: this.published,
      likes: this.likes,
      comments: this.comments,
      tags: this.tags
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

  public populate(data: PostTypeUnion): void { 
    if (! data) {
      return;
    }
    this.id = data.id ?? undefined
    this.postUser = data.postUser;
    this.type = data.type;
    this.date = data.date;
    this.repost = data.repost;
    this.published = data.published;
    this.likes = data.likes;
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