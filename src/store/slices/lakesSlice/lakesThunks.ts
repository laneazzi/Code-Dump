import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { lakesApi } from 'api';

import { TLake, TFavoriteLake } from './types';

export const createLake = createAsyncThunk('lakes/createLake', async (new_lake: TLake) => {
  try {
    const response = await lakesApi.createLakeRequest(new_lake);
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const getLake = createAsyncThunk('lakes/getLake', async (lake_id: number) => {
  try {
    const response = await lakesApi.getLakeRequest(lake_id);
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const updateLake = createAsyncThunk('lakes/updateLake', async (update_a_lake: TLake) => {
  try {
    const response = await lakesApi.updateLakeRequest(update_a_lake);
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const deleteLake = createAsyncThunk('lakes/deleteLake', async (lake_id: number) => {
  try {
    const response = await lakesApi.deleteLakeRequest(lake_id);
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

export const deleteFavLake = createAsyncThunk('lakes/deleteFavLake', async (lake_id: number) => {
  try {
    const response = await lakesApi.deleteMyFavLakeRequest(lake_id);
    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});
