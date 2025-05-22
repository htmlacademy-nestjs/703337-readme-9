import { Post } from './post.interface';

export interface VideoPost extends Post{
  name: string;
  link: string;
}
