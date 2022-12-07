import { combineReducers } from 'redux';

import eventsSlice from './eventsSlice';
import authSlice from './authSlice';
import lakesSlice from './lakesSlice';
import friendsSlice from './friendsSlice';
import activitiesSlice from './activitiesSlice';
import tournamentsSlice from './tournamentsSlice';

export const rootReducer = combineReducers({
  auth: authSlice,
  lakes: lakesSlice,
  events: eventsSlice,
  friends: friendsSlice,
  activities: activitiesSlice,
  tournaments: tournamentsSlice,
});
