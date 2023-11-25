import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
// import { fetchToken } from "./tokenSlice";

const API_URL = 'https://api.spotify.com/v1'
// Token access fetching function
export const fetchToken = createAsyncThunk('token/fetchToken', async () => {
    const clientID = 'bd9d575abfa84db8b2771f76cedd856b'
    const clientSecret = 'f40e2098f6124504b1507e32cccbb92b'
    
    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + clientID + '&client_secret=' + clientSecret,
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    const data = res.json()
    return data 
})

// Music fetching function
export const fetchMusic = createAsyncThunk('musics/fetchMusics', async music => {
    const { token, searchKeyword  } = music

    const parameters = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const res = await fetch(`${API_URL}/search?q=${searchKeyword !== '' ? searchKeyword : 'islamic'}&type=album&limit=50`, parameters)
    const data = res.json()
    return data
})

export const fetchSong = createAsyncThunk('song/fetchSong', async parameter => {
   
   const { token, songid } = parameter
    const parameters = {
        method: 'get',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    
    try {
        const res = await fetch(`https://api.spotify.com/v1/albums/${songid}`, parameters)
        const data = await res.json()
        return data
    } catch(err) {
        console.log(err.message)
    }
    
})

export const fetchArtist = createAsyncThunk('artist/fetchArtist', async parameter => {
   
    const { token, artistId } = parameter
     const parameters = {
         method: 'get',
         mode: 'cors',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
         }
     }
     
     try {
         const res = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, parameters)
         const data = await res.json()
         return data
     } catch(err) {
         console.log(err.message)
     }
     
 })
const musicSlice = createSlice({
    name: 'music',
    initialState: {
        isLoading: false,
        allMusic: null,
        song: null,
        artist: null,
        error: null,
        searchKeyword: '',
        token: null
    },
    reducers: {
        handleSearch: (state, action) => {
            state.searchKeyword = action.payload
        }
    },
    extraReducers: builder => {
        // Token builder
        builder.addCase(fetchToken.pending, state => {
            state.isLoading = true
        })
        .addCase(fetchToken.fulfilled, (state, action) => {
            state.isLoading = false;
            state.token = action.payload.access_token;
            state.error = null
        })
        .addCase(fetchToken.rejected, (state, action) => {
            state.isLoading = false;
            state.token = null;
            state.error = action.error.message;
          });
        
        // Music builder
        builder.addCase(fetchMusic.pending, state => {
            state.isLoading = true
        })
        .addCase(fetchMusic.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allMusic = action.payload;
            state.error = null
        })
        .addCase(fetchMusic.rejected, (state, action) => {
            state.isLoading = false;
            state.allMusic = null;
            state.error = action.payload.error.message;
          });

        // Artist Builder
        builder.addCase(fetchArtist.pending, state => {
            state.isLoading = true
        })
        .addCase(fetchArtist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.artist = action.payload;
            state.error = null
        })
        .addCase(fetchArtist.rejected, (state, action) => {
            state.isLoading = false;
            state.artist = null;
            state.error = action.payload.error.message;
          });
        
    }
})

const musicDetailsSlice = createSlice({
    name: 'musicDetails',
    initialState: {
        isLoading: false,
        musicData: null,
        error: null
    },
    extraReducers: builder => {
        // Song builder
        builder.addCase(fetchSong.pending, state => {
            state.isLoading = true
        })
        .addCase(fetchSong.fulfilled, (state, action) => {
            
            state.isLoading = false;
            state.musicData = action.payload;
            state.error = null
        })
        .addCase(fetchSong.rejected, (state, action) => {
            state.isLoading = false;
            state.musicData = null;
            state.error = action.payload;
          });
    }
})

export const { handleSearch } = musicSlice.actions
export const musicReducer = musicSlice.reducer
export const musicDetailsReducer = musicDetailsSlice.reducer
