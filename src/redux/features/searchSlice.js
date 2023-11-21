
import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
    name: 'music',
    initialState: {
        isLoading: false,
        music: null,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchMusic.pending, state => {
            state.isLoading = true
        })
        .addCase(fetchMusic.fulfilled, (state, action) => {
            state.isLoading = false;
            state.music = action.payload;
            state.error = null
        })
        .addCase(fetchMusic.rejected, (state, action) => {
            state.isLoading = false;
            state.music = null;
            state.error = action.error.message;
          });
    }
})