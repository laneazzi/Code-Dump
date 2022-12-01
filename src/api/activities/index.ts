import { client } from 'api/client';
import { endpoints } from 'api/endpoints';
import {
  TNewPost,
  TUpdatePost,
  TPostGetParams,
  TUpdateComment,
  TNewPostComment,
  TAllPostsParams,
  TParenCommentParams,
  TParenPostCommentParams,
} from 'store/slices/activitiesSlice/types';

export const createActivityPostRequest = (new_activity_post: TNewPost) =>
  client.post(endpoints.ActivitiesService.createActivityPost(), {
    new_activity_post,
  });

export const activityPostByIdRequest = (activity_post_id: number) =>
  client.get(endpoints.ActivitiesService.getActivityPostById(), {
    params: { activity_post_id },
  });

export const activityPostByUserIdRequest = (params: TPostGetParams) =>
  client.get(endpoints.ActivitiesService.getActivityPostByUserId(), {
    params,
  });

export const allPostsRequest = (params: TAllPostsParams) =>
  client.get(endpoints.ActivitiesService.getAllActivityPosts(), {
    params,
  });

export const editPostRequest = (user_activity_post_update: TUpdatePost) =>
  client.put(endpoints.ActivitiesService.updateActivityPost(), {
    user_activity_post_update,
  });

export const deletePostRequest = (activity_post_id: number) =>
  client.delete(endpoints.ActivitiesService.deleteActivityPost(), {
    params: { activity_post_id },
  });

export const createCommentRequest = (new_activity_post_comment: TNewPostComment) =>
  client.post(endpoints.ActivitiesService.createPostComment(), {
    new_activity_post_comment,
  });

export const postCommentByIdRequest = (activity_post_comment_id: number) =>
  client.get(endpoints.ActivitiesService.getPostCommentById(), {
    params: { activity_post_comment_id },
  });

export const postCommentByParentPostIdRequest = (params: TParenPostCommentParams) =>
  client.get(endpoints.ActivitiesService.getPostCommentByParentPostId(), {
    params,
  });

export const postCommentByParentCommentIdRequest = (params: TParenCommentParams) =>
  client.get(endpoints.ActivitiesService.getPostCommentByParentCommentId(), {
    params,
  });

export const editCommentRequest = (activity_post_comment_update: TUpdateComment) =>
  client.put(endpoints.ActivitiesService.editPostComment(), {
    activity_post_comment_update,
  });

export const deletePostCommentRequest = (activity_post_comment_id: number) =>
  client.delete(endpoints.ActivitiesService.deletePostComment(), {
    params: { activity_post_comment_id },
  });
