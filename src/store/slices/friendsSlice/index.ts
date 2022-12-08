import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  friendsList: [],
};

const friendsSlice = createSlice({
  name: 'friendsSlice',
  reducers: {},
  initialState: initialState,
});

export default friendsSlice.reducer;
