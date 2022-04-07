import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todosReducer } from "./todos";
import { authReducer } from "./auth";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    todos: todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);



////////////////////////
// store.js for contacts
//////////////////////

// import { configureStore } from '@reduxjs/toolkit';
// import { contactsApi } from '../contacts.API';
// import { filter } from './Contacts/contacts-reducer';

// export const store = configureStore({
//   reducer: {
//     filter,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//   },

//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//   ],
//   devTools: process.env.NODE_ENV === 'development',
// });
////////////////////