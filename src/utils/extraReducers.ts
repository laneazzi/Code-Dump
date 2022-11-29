import { isObject } from 'lodash';

export const pendingReducer = (state: any) => {
  state.error = null;
  state.loading = true;
};

export const errorReducer = (state: any, action: any) => {
  state.error = isObject(state.error)
    ? { ...state.error, ...action.payload.error }
    : (state.loading = false);
};
