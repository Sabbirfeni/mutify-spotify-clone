import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getSongPlayerData = createAsyncThunk('track/getTrack', async parameter => {
  const { token, songId } = parameter
  const parameters = {
      method: 'get',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
  }
  try {
      const res = await fetch(`https://api.spotify.com/track/6DNRAIeD2hQhGnN1SeaiGX`, parameters)
      const data = await res.json()
      console.log(data)
      return data
  }catch(err) {
      console.log(err)
  }
})

const initialState = {
  isLoading: false,
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  songPlayerData: {},
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.music;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
  extraReducers: builder => {
     // Getting active track
     builder
     .addCase(getSongPlayerData.pending, state => {
         state.isLoading = true
     })
     .addCase(getSongPlayerData.fulfilled, (state, action) => {
      console.log('nonono')
         state.isLoading = false;
         state.songPlayerData = action.payload;
     } )
  }
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
