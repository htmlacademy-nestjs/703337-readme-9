import { Post } from './post.interface';

export interface Repost extends Post{
  originalAuthor: string;
  originalPostId: string;  
}
