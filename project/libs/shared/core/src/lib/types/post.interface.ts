
import { Comment } from './comment.interface';
import { Tag } from './tag.interface';
import { Like } from './like.interface';


export enum PostType {
  Video = 'video',
  Text = 'text',
  Photo = 'photo',
  Citation = 'citation',
  Reference = 'reference',
}

//export type PostType = 'video' | 'text' | 'photo' | 'citation'| 'reference';

export interface Post {
  id?: string;
  userId: string;
  type: PostType;
  createdAt?: Date;
  updatedAt?: Date;
  repost: boolean;
  published: boolean;
  likes?: Like[];
  comments?: Comment[];
  tags?: Tag[];
  text?: string;
  message?: string;
  preview?: string;
  author?: string;
  photoPath?: string;
  name?: string;
  link?: string;
  reference?: string
  description?: string;
}