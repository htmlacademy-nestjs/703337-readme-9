//import { User } from './user.interface';

export interface Comment  {
  id?: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  message: string;
  postId: string;
}
