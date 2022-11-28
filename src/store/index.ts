import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authSlice from './slices/authSlice';

const rootReducer = combineReducers({
  users: authSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
