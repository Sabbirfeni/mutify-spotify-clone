// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchToken = createAsyncThunk('token/fetchToken', async () => {
//     const clientID = 'bd9d575abfa84db8b2771f76cedd856b'
//     const clientSecret = 'f40e2098f6124504b1507e32cccbb92b'
    
//     const res = await fetch('https://accounts.spotify.com/api/token', {
//         method: 'POST',
//         body: 'grant_type=client_credentials&client_id=' + clientID + '&client_secret=' + clientSecret,
//         headers: { 
//             'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         })
//     const data = res.json()
//     return data 
// })

// const tokenSlice = createSlice({
//     name: 'token',
//     initialState: {
//         isLoading: false,
//         token: null,
//         error: null
//     }, 
//     reducers: {},
//     extraReducers: builder => {
//         builder.addCase(fetchToken.pending, state => {
//             state.isLoading = true
//         })
//         .addCase(fetchToken.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.token = action.payload.access_token;
//             state.error = null
//         })
//         .addCase(fetchToken.rejected, (state, action) => {
//             state.isLoading = false;
//             state.token = null;
//             state.error = action.error.message;
//           });
//     }
// })

// export default tokenSlice.reducer