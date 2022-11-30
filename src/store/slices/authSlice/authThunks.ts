import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { authApi } from 'api';

import { TNewUser } from './types';

export const signUp = createAsyncThunk('auth/signUp', async (user: TNewUser) => {
  try {
    const response = await authApi.signUpRequest(user);
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    toast.error('SignUp was failed', {
      position: 'top-left',
      theme: 'dark',
      autoClose: 3000,
      draggable: true,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      hideProgressBar: false,
    });
    throw Error;
  }
});

export const signInAuth = createAsyncThunk('auth/signIn', async (user: FormData) => {
  try {
    const response = await authApi.signInRequest(user);
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    toast.error('Username or password is incorrect', {
      position: 'top-left',
      theme: 'dark',
      autoClose: 3000,
      draggable: true,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      hideProgressBar: false,
    });
    throw Error;
  }
});

export const getCurrentUser = createAsyncThunk('auth/getUser', async () => {
  try {
    const response = await authApi.getUserByTokenRequest();
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const getByUserName = createAsyncThunk(
  'auth/getDataByUserName',
  async (username: string) => {
    try {
      const response = await authApi.getByUserNameRequest(username);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      throw Error;
    }
  },
);

export const getProfileByToken = createAsyncThunk('auth/getProfileByToken', async () => {
  try {
    const response = await authApi.getProfileByTokenRequest();
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const editProfile = createAsyncThunk('auth/editProfile', async (options: any) => {
  try {
    const response = await authApi.editProfileRequest(options);
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});
