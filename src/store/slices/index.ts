import { combineReducers } from 'redux';

import authSlice from './authSlice';

export const rootReducer = combineReducers({
  countSliceData: authSlice.reducer,
});
