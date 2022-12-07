import { endpoints } from 'api/endpoints';
import { TTournament } from 'store/slices/tournamentsSlice/types';

import { client } from './../client';

export const createTournamentRequest = (new_tournament: TTournament) =>
  client.post(endpoints.TournamentsService.createTournament(), { new_tournament });

export const getMyTournamentsRequest = () =>
  client.get(endpoints.TournamentsService.getMyTournaments());

export const getMyTournamentByIdRequest = (tournaments_id: number) =>
  client.get(endpoints.TournamentsService.getMyTournaments(), { params: tournaments_id });

export const updateMyTournamentRequest = (update_tournament: TTournament) =>
  client.post(endpoints.TournamentsService.updateMyTournament(), { update_tournament });

export const removeFromMyTournamentsRequest = (tournament_id: number) =>
  client.delete(endpoints.TournamentsService.removeFromMyTournaments(), {
    params: { tournament_id },
  });
