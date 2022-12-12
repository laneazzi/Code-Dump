import { TNewPostComment, TPost } from 'store/slices/activitiesSlice/types';

export type TPostModal = {
  post: TPost;
  comments: TNewPostComment[];
  deletePost: (id: number) => void;
  addComment: (comment: TNewPostComment) => void;
  replyComment?: (comment: TNewPostComment) => void;
  removeComment: (commentId: number, postId: number) => void;
};
