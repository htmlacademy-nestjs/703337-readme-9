//import { AuthUser } from './auth-user.interface';

export interface Like {
  id?: string;
  userId: string;
  postId: string;
  value: boolean;
}
