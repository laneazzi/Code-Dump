import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { TNewUser } from './types';
import { client } from './../../../api/client';
import { endpoints } from './../../../api/endpoints';

export const signUp = createAsyncThunk('signUp', async (user: TNewUser) => {
  try {
    const response = await client.post(endpoints.AuthService.signUp(), {
      new_user: user,
    });
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

export const signInAuth = createAsyncThunk('signIn', async (user: FormData) => {
  try {
    const response = await client.post(endpoints.AuthService.signIn(), user);
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

export const getCurrentUser = createAsyncThunk('getUser', async (token: string) => {
  try {
    const response = await client.get(endpoints.AuthService.getUserByToken(), {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});
