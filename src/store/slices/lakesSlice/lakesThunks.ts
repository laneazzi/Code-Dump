import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { lakesApi } from 'api';

import { TFavoriteLake } from './types';

export const getLake = createAsyncThunk('lakes/getLake', async (lake_id: number) => {
  try {
    const response = await lakesApi.getLakeRequest(lake_id);
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const addFavLake = createAsyncThunk(
  'lakes/addFavLake',
  async (add_a_favorite_lake: TFavoriteLake) => {
    try {
      const response = await lakesApi.addFavLakeRequest(add_a_favorite_lake);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      throw Error;
    }
  },
);

export const getMyFavLakes = createAsyncThunk('lakes/getMyFavLakes', async () => {
  try {
    const response = await lakesApi.getMyFavLakeRequest();
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const removeFavLake = createAsyncThunk('lakes/deleteFavLake', async (lake_id: number) => {
  try {
    const response = await lakesApi.removeMyFavLakeRequest(lake_id);
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});
