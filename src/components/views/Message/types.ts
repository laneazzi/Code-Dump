import { TNewPostCommentResponse } from 'store/slices/activitiesSlice/types';

export type TMessageProps = {
  postId?: number;
  parentName?: number;
  inChat?: boolean;
  type?: 'comment';
  commentId?: number;
  getId?: (id: number) => void;
  comment: TNewPostCommentResponse;
  removeComment?: (commentId: number, postId: number) => void;
};
