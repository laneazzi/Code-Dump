import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { activitiesApi } from 'api';

import {
  TNewPost,
  TUpdatePost,
  TPostGetParams,
  TNewPostComment,
  TAllPostsParams,
  TParenCommentParams,
  TRemovePostCommentArgs,
  TParenPostCommentParams,
  TUpdatePostCommentArgs,
} from './types';

export const createActivityPost = createAsyncThunk(
  'activities/createPost',
  async (new_activity_post: TNewPost, { dispatch }) => {
    try {
      const response = await activitiesApi.createActivityPostRequest(new_activity_post);
      dispatch(getAllPosts({ limit: 20, offset: 0 }));

      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      return Error.response?.data;
    }
  },
);

export const getActivityPostById = createAsyncThunk(
  'activities/getActivityPostById',
  async (activity_post_id: number) => {
    try {
      const response = await activitiesApi.activityPostByIdRequest(activity_post_id);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      return Error.response?.data;
    }
  },
);

export const getActivityPostByUserId = createAsyncThunk(
  'activities/getActivityPostByUserId',
  async (params: TPostGetParams) => {
    try {
      const response = await activitiesApi.activityPostByUserIdRequest(params);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      return Error.response?.data;
    }
  },
);

export const getAllPosts = createAsyncThunk(
  'activities/getAllPosts',
  async (params: TAllPostsParams) => {
    try {
      const response = await activitiesApi.allPostsRequest(params);

      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      return Error.response?.data;
    }
  },
);

export const updateActivityPost = createAsyncThunk(
  'activities/updateActivityPost',
  async (user_activity_post_update: TUpdatePost) => {
    try {
      const response = await activitiesApi.editPostRequest(user_activity_post_update);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      return Error.response?.data;
    }
  },
);

export const deleteActivityPost = createAsyncThunk(
  'activities/deleteActivityPost',
  async (activity_post_id: number, { dispatch }) => {
    try {
      const response = await activitiesApi.deletePostRequest(activity_post_id);
      dispatch(getAllPosts({ limit: 10, offset: 0 }));
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      return Error.response?.data;
    }
  },
);

export const createPostComment = createAsyncThunk(
  'activities/createPostComment',
  async (new_activity_post_comment: TNewPostComment, { dispatch }) => {
    try {
      const response = await activitiesApi.createCommentRequest(new_activity_post_comment);
      dispatch(
        getPostCommentByParentPostId({
          parent_post_id: new_activity_post_comment.user_activity_post_id,
        }),
      );
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      return Error.response?.data;
    }
  },
);

export const getPostCommentById = createAsyncThunk(
  'activities/getPostCommentById',
  async (activity_post_comment_id: number) => {
    try {
      const response = await activitiesApi.postCommentByIdRequest(activity_post_comment_id);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      return Error.response?.data;
    }
  },
);

export const getPostCommentByParentPostId = createAsyncThunk(
  'activities/getPostCommentByParentPostId',
  async (params: TParenPostCommentParams) => {
    try {
      const response = await activitiesApi.postCommentByParentPostIdRequest(params);
      return response.data;
    } catch (error) {
      return [];
    }
  },
);

export const getPostCommentByParentCommentId = createAsyncThunk(
  'activities/getPostCommentByParentPostId',
  async (params: TParenCommentParams) => {
    try {
      const response = await activitiesApi.postCommentByParentCommentIdRequest(params);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      return Error.response?.data;
    }
  },
);

export const editPostComment = createAsyncThunk(
  'activities/editPostComment',
  async (args: TUpdatePostCommentArgs, { dispatch }) => {
    try {
      const response = await activitiesApi.editCommentRequest(args.activity_post_comment_id as any);
      dispatch(getPostCommentByParentPostId({ parent_post_id: args.postId }));
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      return Error.response?.data;
    }
  },
);

export const deletePostComment = createAsyncThunk(
  'activities/deletePostComment',
  async (args: TRemovePostCommentArgs, { dispatch }) => {
    try {
      const response = await activitiesApi.deletePostCommentRequest(args.activity_post_comment_id);
      dispatch(getPostCommentByParentPostId({ parent_post_id: args.postId }));
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      return Error.response?.data;
    }
  },
);
