import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { activitiesApi } from 'api';

import {
  TNewPost,
  TUpdatePost,
  TPostGetParams,
  TUpdateComment,
  TNewPostComment,
  TAllPostsParams,
  TParenCommentParams,
  TParenPostCommentParams,
} from './types';

export const createActivityPost = createAsyncThunk(
  'activities/createPost',
  async (new_activity_post: TNewPost) => {
    try {
      const response = await activitiesApi.createActivityPostRequest(new_activity_post);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      throw Error;
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
      throw Error;
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
      throw Error;
    }
  },
);

export const getAllPosts = createAsyncThunk(
  'activities/getAllPosts',
  async (params: TAllPostsParams = {}) => {
    try {
      const response = await activitiesApi.allPostsRequest(params);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      throw Error;
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
      throw Error;
    }
  },
);

export const deleteActivityPost = createAsyncThunk(
  'activities/deleteActivityPost',
  async (activity_post_id: number) => {
    try {
      const response = await activitiesApi.deletePostRequest(activity_post_id);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      throw Error;
    }
  },
);

export const createPostComment = createAsyncThunk(
  'activities/createPostComment',
  async (new_activity_post_comment: TNewPostComment) => {
    try {
      const response = await activitiesApi.createCommentRequest(new_activity_post_comment);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      throw Error;
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
      throw Error;
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
      const Error = error as AxiosError;
      throw Error;
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
      throw Error;
    }
  },
);

export const editPostComment = createAsyncThunk(
  'activities/editPostComment',
  async (activity_post_comment_update: TUpdateComment) => {
    try {
      const response = await activitiesApi.editCommentRequest(activity_post_comment_update);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      throw Error;
    }
  },
);

export const deletePostComment = createAsyncThunk(
  'activities/deletePostComment',
  async (activity_post_comment_id: number) => {
    try {
      const response = await activitiesApi.deletePostCommentRequest(activity_post_comment_id);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      throw Error;
    }
  },
);
