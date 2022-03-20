import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction('filter/change');


// const formContact = (contact) => ({
//   payload: { ...contact, id: nanoid() },
// });

// export const addItem = createAction("items/add", formContact);
// export const removeItem = createAction("items/remove");
// export const changeFilter = createAction("filter/change");
