import { AuthUser } from './auth-user.interface';
import { Comment } from './comment.interface';
import { Tag } from './tag.interface';

export enum PostType {
  Video = 'video',
  Text = 'text',
  Photo = 'photo',
  Citation = 'citation',
  Reference = 'reference',
}

export interface Post {
  id?: string;
  postUser: AuthUser;
  type: PostType;
  date: string;
  repost: boolean;
  published: boolean;
  likes?: number;
  comments?: Comment[];
  tags?: Tag[];
}