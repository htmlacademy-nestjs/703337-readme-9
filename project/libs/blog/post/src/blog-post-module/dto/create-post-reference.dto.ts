import { PostType } from '@project/shared/core';
import { AuthUser, Tag } from '@project/shared/core';
import {
  ArrayNotEmpty,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsString,
  IsUUID
} from 'class-validator';

export class CreatePostReferenceDto {
  public id?: string;
  public userId: string;
  public type: PostType;
  public date: string;
  public repost: boolean;
  public published: boolean;
  public likes: number;
  public comments: Comment[];
  public tags?: Tag[];
  public reference: string;
  public description: string; 
}