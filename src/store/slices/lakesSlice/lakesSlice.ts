import { createSlice } from '@reduxjs/toolkit';

import { createLake } from './lakesThunks';
import { TInitialState } from './../lakesSlice/types';

const initialState: TInitialState = {
  lake: null,
};

const lakesSlice = createSlice({
  name: 'lakesSlice',
  reducers: {},
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(createLake.fulfilled, (state, action) => {
      state.lake = action.payload;
    });
  },
});

export default lakesSlice.reducer;
