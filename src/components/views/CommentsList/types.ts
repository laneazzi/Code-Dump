import {
  TPost,
  TNewPostComment,
  TNewPostCommentParent,
  TNewPostCommentResponse,
} from 'store/slices/activitiesSlice/types';

export type TCommentsListProps = {
  post?: TPost;
  list: TNewPostCommentResponse[];
  replyComment?: (comment: TNewPostComment) => void;
  addComment: (comment: TNewPostComment) => void;
  removeComment: (commentId: number, postId: number) => void;
};

export type TCommentProps = {
  getId: (id: number) => void;
  post: TPost;
  removeComment: (commentId: number, postId: number) => void;
  commentary: TNewPostCommentParent;
};
