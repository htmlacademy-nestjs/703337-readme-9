import {Document} from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Post, Tag, Comment, AuthUser, PostType } from '@project/shared/core';

@Schema({
  collection: 'blogs',
  timestamps: true,
})
export class BlogPostModel extends Document implements Post {
  @Prop()
  public postUser: AuthUser;  

  @Prop({
    type: String,
    enum: PostType,
    default: PostType.Text,
  })
  public type: PostType;

  @Prop({
    required: true,
  })
  public date: string;  

  @Prop({
    required: true,
  })
  public repost: boolean;

  @Prop({
    required: true,
  })
  public published: boolean;

  @Prop()
  public likes: number;

  @Prop()
  public comments: Comment[];

  @Prop()
  public tags: Tag[];

  @Prop()
  public preview?: string;

  @Prop()
  public name?: string;

  @Prop()
  public message?: string;

  @Prop()
  public text?: string;

  @Prop()
  public author?: string;

  @Prop()
  public photoPath?: string;

  @Prop()
  public reference?: string;

  @Prop()
  public description?: string;

  @Prop()
  public link?: string;
  
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogPostModel);