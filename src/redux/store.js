import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
// import tokenReducer from './features/tokenSlice';
import musicReducer from './features/musicSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    music: musicReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware)
});
