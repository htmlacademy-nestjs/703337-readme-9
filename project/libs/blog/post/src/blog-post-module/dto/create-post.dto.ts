import {
  IsMongoId,
  IsNotEmpty,
  IsString,
  IsUUID
} from 'class-validator';
import { PostType } from '@project/shared/core';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  public type: PostType;

  @IsString()
  @IsNotEmpty()
  public published: boolean;

  @IsString()
  @IsNotEmpty()
  public repost: boolean;

  @IsString()
  @IsMongoId()
  public userId: string;

  @IsUUID('all', { each: true })
  public tags: string[];

  @IsString()  
  public text: string;

  @IsString()  
  public message: string;

  @IsString()  
  public preview: string;

  @IsString()  
  public author: string;

  @IsString()  
  public photoPath: string;

  @IsString()  
  public name: string;

  @IsString()  
  public link: string;

  @IsString()  
  public reference: string

  @IsString()  
  public description: string;
}
