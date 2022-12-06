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
  user_id?: number;
  content: string;
  on_main_post: boolean;
  reaction_icon: string;
  parent_comment_id?: number;
  user_activity_post_id: number;
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
  currentActivityComments: TNewPostComment[];
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
