import { createSlice } from '@reduxjs/toolkit';

import { TInitialState } from './types';
import { createEvent, getMyEvents, getEventById, editEvent } from './eventsThunks';

const initialState: TInitialState = {
  events: [],
  createdEvent: null,
  currentEvent: null,
};

const eventsSlice = createSlice({
  name: 'events',
  reducers: {},
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(createEvent.fulfilled, (state, action) => {
      state.createdEvent = action.payload;
    });

    builder.addCase(getMyEvents.fulfilled, (state, action) => {
      state.events.push(action.payload);
    });

    builder.addCase(getEventById.fulfilled, (state, action) => {
      state.currentEvent = action.payload;
    });

    builder.addCase(editEvent.fulfilled, (state, action) => {
      state.currentEvent = action.payload;
    });
  },
});

export default eventsSlice.reducer;
