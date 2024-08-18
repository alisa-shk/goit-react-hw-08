import { createSlice } from "@reduxjs/toolkit";
import { refreshUser, loginThunk, logoutThunk, registerThunk } from "./operations";

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user.name = action.payload.name;
                state.user.email = action.payload.email;
                state.isRefreshing = false;
            })
            .addCase(logoutThunk.fulfilled, () => {
                return initialState;
            })
            .addCase(refreshUser.pending, (state, action) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
            })
    }
});

export const authReducer = slice.reducer;