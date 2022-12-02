import { client } from 'api/client';
import { endpoints } from 'api/endpoints';

import { TLake, TFavoriteLake } from './../../store/slices/lakesSlice/types';

export const createLakeRequest = (new_lake: TLake) =>
  client.post(endpoints.LakesService.createLake(), { new_lake });

export const getLakeRequest = (lake_id: number) =>
  client.get(endpoints.LakesService.getLake(), { params: { lake_id } });

export const updateLakeRequest = (update_a_lake: TLake) =>
  client.put(endpoints.LakesService.updateLake(), { update_a_lake });

export const deleteLakeRequest = (lake_id: number) =>
  client.delete(endpoints.LakesService.deleteLake(), { params: { lake_id } });

export const addFavLakeRequest = (add_a_favorite_lake: TFavoriteLake) =>
  client.post(endpoints.LakesService.addFavoriteLake(), { add_a_favorite_lake });

export const getMyFavLakeRequest = () => client.get(endpoints.LakesService.getMyFavoriteLake());

export const deleteMyFavLakeRequest = (lake_id: number) =>
  client.delete(endpoints.LakesService.deleteFavoriteLake(), { params: { lake_id } });
