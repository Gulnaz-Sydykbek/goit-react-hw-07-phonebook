import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebooksAPI from '../../service/phonebooks-api';

export const fetchPhonebooks = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phonebooksAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (phoneList, { rejectWithValue }) => {
    try {
      const contacts = await phonebooksAPI.addContacts(phoneList);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await phonebooksAPI.deleteContacts(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
