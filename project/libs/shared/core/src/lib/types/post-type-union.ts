// import { VideoPost } from './video-post.interface';
// import { TextPost } from './text-post.interface';
// import { PhotoPost } from './photo-post.interface';
// import { ReferencePost } from './reference-post.interface';
// import { CitationPost } from './citation-post.interface';
import { Tag } from './tag.interface';
import { PostType } from './post.interface';
import { AuthUser } from './auth-user.interface';
import { Comment } from './comment.interface';

export type PostTypeUnion = {
  id?: string;
  postUser: AuthUser;
  type: PostType;
  date: string;
  repost: boolean;
  published: boolean;
  likes: number;
  comments?: Comment[];
  tags?: Tag[];

  text?: string;
  author?: string;

  photoPath?: string;

  reference?: string;
  description?: string;

  name?: string;
  preview?: string;
  message?: string;

  link?: string;
};
