import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { extraReducers } from 'utils';

import { TInitialState } from './types';
import { getAllPosts, getActivityPostById, getPostCommentByParentPostId } from './activitiesThunks';

const initialState: TInitialState = {
  error: null,
  loading: false,
  isChanged: false,
  allActivities: [],
  repliedComments: [],
  currentActivity: null,
  currentActivityComments: [],
};

const activitiesSlice = createSlice({
  name: 'activitiesSlice',
  reducers: {},
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.allActivities = action.payload;
    });

    builder.addCase(getActivityPostById.fulfilled, (state, action) => {
      state.currentActivity = action.payload;
    });

    builder.addCase(getPostCommentByParentPostId.fulfilled, (state, action) => {
      state.currentActivityComments = action.payload;
    });

    builder.addMatcher(
      isAnyOf(getAllPosts.rejected, getPostCommentByParentPostId.rejected),
      extraReducers.errorReducer,
    );

    builder.addMatcher(
      isAnyOf(getAllPosts.pending, getPostCommentByParentPostId.rejected),
      extraReducers.pendingReducer,
    );
  },
});

export default activitiesSlice.reducer;
