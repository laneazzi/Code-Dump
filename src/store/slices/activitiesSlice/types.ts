export type TNewPost = {
  user_id: number;
  description: string;
  content_url: string;
  content_type: string;
};

export type TUpdatePost = {
  id: number;
  user_id: number;
  description: string;
  content_url: string;
  content_type: string;
};

export type TPostGetParams = {
  limit?: number;
  offset?: number;
  user_id: number;
};

export type TAllPostsParams = {
  limit?: number;
  offset?: number;
};

export type TNewPostComment = {
  id?: number;
  content: string;
  user_id?: number;
  on_main_post: boolean;
  reaction_icon: string;
  parent_comment_id?: number;
  user_activity_post_id: number;
};

export type TNewPostCommentResponse = {
  id: number;
  user_id?: number;
  content: string;
  on_main_post: boolean;
  reaction_icon: string;
  parent_comment_id: number;
  user_activity_post_id: number;
  created_at?: Date | null;
  updated_at?: Date | null;
};

export type TNewPostCommentParent = TNewPostCommentResponse & {
  replies: TNewPostCommentResponse[];
};

export type TUpdateComment = {
  id: number;
  user_id: number;
  content: string;
  reaction_icon: string;
};

export type TParenPostCommentParams = {
  limit?: number;
  offset?: number;
  parent_post_id: number;
};

export type TParenCommentParams = {
  limit?: number;
  offset?: number;
  parent_comment_id: number;
};

export type TInitialState = {
  loading: boolean;
  isChanged: boolean;
  error: null | Error;
  allActivities: TPost[];
  currentActivity: TPost | null;
  repliedComments: TNewPostComment[];
  currentActivityComments: TNewPostCommentResponse[];
};

export type TPost = {
  id: number;
  user_id: number;
  created_at?: any;
  updated_at?: any;
  description: string;
  content_url: string;
  content_type: string;
  currentCommentsList: any;
};

export type TRemovePostCommentArgs = {
  postId: number;
  activity_post_comment_id: number;
};

export type TUpdatePostCommentArgs = {
  postId: number;
  activity_post_comment_id: TUpdatePost;
};
