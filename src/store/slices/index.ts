import { combineReducers } from 'redux';

import eventsSlice from './eventsSlice';
import authSlice from './authSlice/authSlice';
import lakesSlice from './lakesSlice/lakesSlice';
import friendsSlice from './friendsSlice/friendsSlice';
import activitiesSlice from './activitiesSlice/activitiesSlice';

export const rootReducer = combineReducers({
  auth: authSlice,
  lakes: lakesSlice,
  events: eventsSlice,
  friends: friendsSlice,
  activities: activitiesSlice,
});
