import { combineReducers } from 'redux';
import { countSlice } from './countSlice';

export const rootReducer = combineReducers({
  countSliceData: countSlice.reducer,
});
