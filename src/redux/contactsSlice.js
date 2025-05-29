import { createSlice } from "@reduxjs/toolkit";
import defaultContacts from "../../src/components/defaultContacts.json";

const initialState = {
  items: defaultContacts,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    del: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, del } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState,
//   reducers: {
//     addContact: (state, action) => {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     },
//     deleteContact: (state, action) => {
//       return {
//         ...state,
//         items: [...state.items.filter((item) => item.id !== action.payload.id)],
//       };
//     },
//   },
// });