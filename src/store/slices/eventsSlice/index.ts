import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { extraReducers } from 'utils';

import { TInitialState } from './types';
import { createEvent, getMyEvents, getEventById, editEvent } from './eventsThunks';

const initialState: TInitialState = {
  events: [],
  error: null,
  loading: false,
  createdEvent: null,
  currentEvent: null,
};

const eventsSlice = createSlice({
  name: 'events',
  reducers: {},
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(createEvent.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.createdEvent = action.payload;
    });

    builder.addCase(getMyEvents.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.events = action.payload;
    });

    builder.addCase(getEventById.fulfilled, (state, action) => {
      state.currentEvent = action.payload;
    });

    builder.addCase(editEvent.fulfilled, (state, action) => {
      state.currentEvent = action.payload;
    });

    builder.addMatcher(
      isAnyOf(createEvent.rejected, getMyEvents.rejected),
      extraReducers.errorReducer,
    );

    builder.addMatcher(
      isAnyOf(createEvent.pending, getMyEvents.pending),
      extraReducers.pendingReducer,
    );
  },
});

export default eventsSlice.reducer;
