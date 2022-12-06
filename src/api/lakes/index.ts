import { client } from 'api/client';
import { endpoints } from 'api/endpoints';

import { TFavoriteLake } from './../../store/slices/lakesSlice/types';

export const getLakeRequest = (lake_id: number) =>
  client.get(endpoints.LakesService.getLake(), { params: { lake_id } });

export const addFavLakeRequest = (add_a_favorite_lake: TFavoriteLake) =>
  client.post(endpoints.LakesService.addFavoriteLake(), { add_a_favorite_lake });

export const getMyFavLakeRequest = () => client.get(endpoints.LakesService.getMyFavoriteLake());

export const removeMyFavLakeRequest = (lake_id: number) =>
  client.delete(endpoints.LakesService.removeFromFavoriteLake(), { params: { lake_id } });
