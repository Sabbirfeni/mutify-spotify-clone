import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
// import tokenReducer from './features/tokenSlice';
// import musicReducer from './features/musicSlice';
import { musicReducer, musicDetailsReducer } from './features/musicSlice';
export const store = configureStore({
  reducer: {
    player: playerReducer,
    music: musicReducer,
    musicDetail: musicDetailsReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware)
});
