import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
// import { fetchToken } from "./tokenSlice";

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
export const fetchMusic = createAsyncThunk('music/fetchMusic', async music => {
    const { token, searchKeyword  } = music
    const parameters = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const res = await fetch(`https://api.spotify.com/v1/search?q=${searchKeyword !== '' ? searchKeyword : 'islamic'}&type=album&limit=50`, parameters)
    const data = res.json()
    return data
})

const musicSlice = createSlice({
    name: 'music',
    initialState: {
        isLoading: false,
        allMusic: null, 
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
    }
})


export const { handleSearch } = musicSlice.actions
export default musicSlice.reducer
