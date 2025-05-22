import { AuthUser } from './auth-user.interface';

export interface Like {
  id?: string;
  user: AuthUser;
  postId: string;
  value: boolean;
}
