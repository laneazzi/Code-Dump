import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { extraReducers } from 'utils';

import { TInitialState } from './types';
import { getMyTournaments } from './tournamentsThunks';

const initialState: TInitialState = {
  tournaments: [],
};

const tournamentsSlice = createSlice({
  name: 'tournamentsSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMyTournaments.fulfilled, (state, action) => {
      state.tournaments = action.payload;
    });

    builder.addMatcher(isAnyOf(getMyTournaments.rejected), extraReducers.errorReducer);

    builder.addMatcher(isAnyOf(getMyTournaments.pending), extraReducers.pendingReducer);
  },
});

export default tournamentsSlice.reducer;
