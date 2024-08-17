import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://66b59b69b5ae2d11eb640687.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
    try {
        const response = await axios.get('contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    });

export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (body, thunkAPI) => {
    try {
        const response = await axios.post(`contacts`, body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    });

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
    try {
        await axios.delete(`contacts/${id}`);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    });