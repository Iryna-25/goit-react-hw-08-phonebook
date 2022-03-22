import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  removeContact,
  signUp,
  logIn,
  logOut,
} from './API/requests';

export const signUpThunk = createAsyncThunk('users/signup', async () => {
  const result = await signUp();
  return result.data;
});

export const logInThunk = createAsyncThunk('users/signup', async () => {
  const result = await logIn();
  return result.data;
});

export const logOutThunk = createAsyncThunk('users/signup', async () => {
  const result = await logOut();
  return result.data;
});

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const result = await getContacts();
    return result.data;
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async contactData => {
    const result = await addContact(contactData);
    return result.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const result = await removeContact(id);
    return result.data;
  }
);