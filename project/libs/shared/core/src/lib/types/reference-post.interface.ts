import { Post } from './post.interface';

export interface ReferencePost extends Post{
  reference: string;
  description: string;  
}
