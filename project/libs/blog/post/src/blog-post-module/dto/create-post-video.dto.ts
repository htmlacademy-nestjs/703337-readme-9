import { PostType } from '@project/shared/core';
import { AuthUser, Tag } from '@project/shared/core';

export class CreatePostVideoDto {
  public id?: string;
  public postUser: AuthUser;
  public type: PostType;
  public date: string;
  public repost: boolean;
  public published: boolean;
  public likes: number;
  public comments: Comment[];
  public tags?: Tag[];
  public name: string;
  public link: string;
   
}