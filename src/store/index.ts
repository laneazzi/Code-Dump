import { rootReducer } from './slices/index';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { rootReducer },
});

export default store;
