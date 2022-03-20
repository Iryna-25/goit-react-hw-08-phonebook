import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from '../contacts.API';
import { filter } from './Contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});