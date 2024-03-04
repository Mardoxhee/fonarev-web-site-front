import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './slices/actualite';
import { setupListeners } from '@reduxjs/toolkit/query';
import {persistReducer} from 'redux-persist'

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

setupListeners(store.dispatch);
