import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authSlice from './slices/authSlice/authSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
