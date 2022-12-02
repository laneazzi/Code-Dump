import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { friendsApi } from 'api';

import { TFriend } from './types';

export const inviteFriend = createAsyncThunk(
  'friends/inviteFriend',
  async (invite_friend: TFriend) => {
    try {
      const response = await friendsApi.inviteFriendRequest(invite_friend);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      throw Error;
    }
  },
);

export const getFriendsById = createAsyncThunk('friends/getFriendsById', async () => {
  try {
    const response = await friendsApi.getFriendsByUserIdRequest();
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const updateFriendStatus = createAsyncThunk(
  'friends/updateFriendStatus',
  async (update_friend: TFriend) => {
    try {
      const response = await friendsApi.updateFriendStatusRequest(update_friend);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      throw Error;
    }
  },
);
