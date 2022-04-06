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
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);



////////////////////////////////////
// import { configureStore } from '@reduxjs/toolkit';
// import { contactsApi } from '../components/API/contacts.API';
// import { filter } from './contacts/contacts-reducer';

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
/////////////////////////////////////