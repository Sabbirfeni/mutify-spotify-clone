import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { noCodeApi } from './services/noCodeApi';

export const store = configureStore({
  reducer: {
    [noCodeApi.reducerPath]: noCodeApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(noCodeApi.middleware)
});
