import { configureStore, combineReducers } from '@reduxjs/toolkit';

import eventsSlice from './slices/eventsSlice';
import authSlice from './slices/authSlice/authSlice';
import activitiesSlice from './slices/activitiesSlice/activitiesSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  events: eventsSlice,
  activities: activitiesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
