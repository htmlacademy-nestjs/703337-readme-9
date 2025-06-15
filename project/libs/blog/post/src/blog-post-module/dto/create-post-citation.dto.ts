import { PostType } from '@project/shared/core';
import { AuthUser } from '@project/shared/core';
import { Tag } from '@project/shared/core';
import {
  ArrayNotEmpty,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsString,
  IsUUID, IsBoolean
} from 'class-validator';

export class CreatePostCitationDto {
  public id?: string;

  @IsString()
  @IsMongoId()
  public userId: string;

  @IsString()
  @IsNotEmpty()
  public type: PostType;

  @IsBoolean()
  public repost: boolean;

  @IsBoolean()
  public published: boolean;

  public likes: number;

  public comments: Comment[];

  @IsUUID('all', { each: true })
  @IsArray()
  @ArrayNotEmpty()
  public tags?: Tag[];

  @IsString()
  public text: string;

  @IsString()
  public author: string; 
}

  