import { Post } from './post.interface';

export interface CitationPost extends Post{
  text: string;
  author: string;  
}
