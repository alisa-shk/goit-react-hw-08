import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { deleteContactThunk, fetchContactsThunk, addContactThunk } from "../contacts/operations";
import { logoutThunk } from "../auth/operations";

const initialState = {
    items: [],
    loading: false,
    elserror: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContactsThunk.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteContactThunk.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(logoutThunk.fulfilled, () => {
                return initialState;
            })
            .addMatcher(isAnyOf(fetchContactsThunk.pending, addContactThunk.pending, deleteContactThunk.pending), state => {
                state.loading = true;
                state.error = false;
            })
            .addMatcher(isAnyOf(fetchContactsThunk.rejected, addContactThunk.rejected, deleteContactThunk.rejected), state => {
                state.loading = false;
                state.error = true;
            })
            .addMatcher(isAnyOf(fetchContactsThunk.fulfilled, addContactThunk.fulfilled, deleteContactThunk.fulfilled), state => {
                state.loading = false;
            })
    },
});

export const contactsReducer = contactsSlice.reducer;

