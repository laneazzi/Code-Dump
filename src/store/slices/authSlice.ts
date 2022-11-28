import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { TInitialState } from './types';

const initialState: TInitialState = {
  users: [],
  userData: {},
  error: null,
  loading: 'idle',
};

type TNewUser = {
  email: string;
  username: string;
  password: string;
};

export const signUp = createAsyncThunk('signUp', async (user: TNewUser) => {
  try {
    const response = await axios.post(`https://dev001.reelbuds.com/auth-api/rb/user/`, {
      new_user: user,
    });
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const signInAuth = createAsyncThunk('signIn', async (user: any) => {
  try {
    const response = await axios.post(
      `https://dev001.reelbuds.com/auth-api/rb/user/login/token/`,
      user,
    );
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const getCurrentUser = createAsyncThunk('getUser', async (token: any) => {
  try {
    const response = await axios.get('https://dev001.reelbuds.com/auth-api/rb/user/me/', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.users.push(action.payload as any);
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.error.message as any;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export default authSlice;
