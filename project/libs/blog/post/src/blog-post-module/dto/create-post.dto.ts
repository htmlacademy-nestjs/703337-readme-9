import {
  ArrayMaxSize,
  IsBoolean, IsOptional,
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

  @IsBoolean()
  @IsNotEmpty()
  public published: boolean;

  @IsBoolean()
  @IsNotEmpty()
  public repost: boolean;

  @IsString()
  @IsMongoId()
  public userId?: string;

  @ArrayMaxSize(8)
  @IsUUID('all', { each: true })
  public tags?: string[];

  @IsString()
  @IsOptional()
  public text?: string;

  @IsString()  
  @IsOptional()
  public message?: string;

  @IsString()
  @IsOptional()
  public preview?: string;

  @IsString()
  @IsOptional() 
  public author?: string;

  @IsString()
  @IsOptional() 
  public photoPath?: string;

  @IsString()
  @IsOptional()
  public name?: string;

  @IsString()
  @IsOptional()
  public link?: string;

  @IsString()
  @IsOptional()
  public reference?: string

  @IsString()
  @IsOptional()
  public description?: string;
}
