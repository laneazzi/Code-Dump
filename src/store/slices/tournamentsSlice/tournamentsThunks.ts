import { createAsyncThunk } from '@reduxjs/toolkit';

import { tournamentsApi } from 'api';

import { TTournament } from './types';

export const createTournament = createAsyncThunk(
  'tournament/createTournament',
  async (new_tournament: TTournament) => {
    try {
      const response = await tournamentsApi.createTournamentRequest(new_tournament);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const getMyTournaments = createAsyncThunk('tournament/getMyTournaments', async () => {
  try {
    const response = await tournamentsApi.getMyTournamentsRequest();
    return response.data;
  } catch (error) {
    return error;
  }
});

export const getTournamentById = createAsyncThunk(
  'tournament/getTournamentById',
  async (tournaments_id: number) => {
    try {
      const response = await tournamentsApi.getMyTournamentByIdRequest(tournaments_id);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const updateMyTournament = createAsyncThunk(
  'tournament/updateMyTournament',
  async (update_tournament: TTournament) => {
    try {
      const response = await tournamentsApi.updateMyTournamentRequest(update_tournament);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const removeFromMyTournaments = createAsyncThunk(
  'tournaments/removeFromMyTournaments',
  async (tournament_id: number) => {
    try {
      const response = await tournamentsApi.removeFromMyTournamentsRequest(tournament_id);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);
