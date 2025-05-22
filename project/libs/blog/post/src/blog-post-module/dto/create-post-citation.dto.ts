import { PostType } from '@project/shared/core';
import { AuthUser } from '@project/shared/core';
import { Tag } from '@project/shared/core';

export class CreatePostCitationDto {
  public id?: string;
  public postUser: AuthUser;
  public type: PostType;
  public date: string;
  public repost: boolean;
  public published: boolean;
  public likes: number;
  public comments: Comment[];
  public tags?: Tag[];
  public text: string;
  public author: string; 
}

  