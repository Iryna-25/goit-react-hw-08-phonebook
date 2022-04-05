import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../Redux/authSlice';
import { contactsApi } from './API/contacts.API';
import { filter } from './contacts-reducer';

export const store = configureStore({
  reducer: {
    authUser: authSlice,

    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware],
  devTools: process.env.NODE_ENV === 'development',
});
