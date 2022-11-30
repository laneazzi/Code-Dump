import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

const eventsSlice = createSlice({
  name: 'events',
  reducers: {},
  initialState: initialState,
});

export default eventsSlice.reducer;
