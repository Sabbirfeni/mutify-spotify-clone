import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
// import tokenReducer from './features/tokenSlice';
// import musicReducer from './features/musicSlice';
import { musicReducer, musicDetailsReducer } from './features/musicSlice';
import { mobileMenuReducer } from './features/mobileMenuSlice';
export const store = configureStore({
  reducer: {
    player: playerReducer,
    music: musicReducer,
    musicDetail: musicDetailsReducer,
    mobileMenu: mobileMenuReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware)
});
