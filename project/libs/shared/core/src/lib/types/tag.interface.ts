import { AuthUser } from './auth-user.interface';

export interface Tag {
  id?: string;
  user?: AuthUser;
  postId?: string;
  text: string;
}
