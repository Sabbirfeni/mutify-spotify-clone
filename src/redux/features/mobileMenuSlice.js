import { createSlice } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState: {
        mobileMenuOpen: false
    },
    reducers: {
        setMobileMenuOpen: (state, action) => {
            state.mobileMenuOpen = action.payload
        }
    }
})

export const { setMobileMenuOpen } = mobileMenuSlice.actions;
export const mobileMenuReducer = mobileMenuSlice.reducer