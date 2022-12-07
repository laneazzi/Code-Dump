import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lake: [],
};

const lakesSlice = createSlice({
  name: 'lakesSlice',
  reducers: {},
  initialState: initialState,
});

export default lakesSlice.reducer;
