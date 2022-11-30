import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { extraReducers } from 'utils';
import {
  signInAuth,
  editProfile,
  getByUserName,
  getProfileByToken,
} from 'store/slices/authSlice/authThunks';
import { BrowserStorageKeys, BrowserStorageService } from 'services';

import { TInitialState } from './types';
import { getCurrentUser, signUp } from './authThunks';

const initialState: TInitialState = {
  users: [],
  error: null,
  loading: false,
  userData: null,
  rememberMe: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    keptSignIn: (state) => {
      state.rememberMe = !state.rememberMe;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.users.push(action.payload);

      BrowserStorageService.set(
        BrowserStorageKeys.AccessToken,
        JSON.stringify(action.payload?.access_token?.access_token),
        { session: true },
      );
    });

    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userData = action.payload;
    });

    builder.addCase(signInAuth.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.userData = action.payload;

      BrowserStorageService.set(
        BrowserStorageKeys.AccessToken,
        JSON.stringify(action.payload.access_token),
        { session: !state.rememberMe },
      );
    });

    builder.addCase(getByUserName.fulfilled, (state, action) => {
      state.userData = action.payload;
    });

    builder.addCase(getProfileByToken.fulfilled, (state, action) => {
      state.userData = action.payload;
    });

    builder.addCase(editProfile.fulfilled, (state, action) => {
      state.userData = action.payload;
    });

    builder.addMatcher(
      isAnyOf(signUp.rejected, getCurrentUser.rejected, signInAuth.rejected),
      extraReducers.errorReducer,
    );

    builder.addMatcher(
      isAnyOf(signUp.pending, getCurrentUser.pending, signInAuth.pending),
      extraReducers.pendingReducer,
    );
  },
});

export const { keptSignIn } = authSlice.actions;

export default authSlice.reducer;
