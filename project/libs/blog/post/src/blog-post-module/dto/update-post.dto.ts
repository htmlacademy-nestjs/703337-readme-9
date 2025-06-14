import { ArrayNotEmpty, IsArray, IsNotEmpty,IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public type?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public published?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public repost?: string;

  @IsUUID('all', { each: true })
  @IsArray()
  @ArrayNotEmpty()
  @IsOptional()
  public tags?: string[];

  @IsString()  
  public text?: string;

  @IsString()  
  public message?: string;

  @IsString()  
  public preview?: string;

  @IsString()  
  public author?: string;

  @IsString()  
  public photoPath?: string;

  @IsString()  
  public name?: string;

  @IsString()  
  public link?: string;

  @IsString()  
  public reference?: string

  @IsString()  
  public description?: string;
}
