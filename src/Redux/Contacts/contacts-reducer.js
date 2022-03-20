import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./contacts-actions";

export const filter = createReducer ('', {
  [changeFilter]: (_, { payload }) => payload,
});
// const items = createReducer([], {
//   [addItem]: (state, { payload }) => [...state, payload],
//   [removeItem]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// });

// const filter = createReducer("", {
//   [changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   filter,
// });
