import { Post } from './post.interface';

export interface TextPost extends Post{
  name: string;
  preview: string;
  message: string;  
}
