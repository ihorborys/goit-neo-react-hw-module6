import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice.js";

const rootReducer = {
  contacts: contactsReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;

// const initialState = {
//   contacts: {
//     items: [],
//   },
//   filters: {
//     name: "",
//   },
// };

// export const addContactAction = createAction("addContact");
//
// export const reducer = createReducer(initialState, (builder) => {
//   builder.addCase(addContactAction, (state, action) => {
//     return {
//       ...state,
//       contacts: {
//         ...state.contacts,
//         items: [...state.contacts.items, action.payload],
//       },
//     };
//   });
// });

// const reducer = (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case addContactAction.type:
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: action.payload,
//         },
//       };
//
//     default:
//       return state;
//   }
// };

// const reducer = (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + action.payload,
//         },
//       };
//
//     case "decrement":
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// items: state.contacts.items.push(action.payload),

// return {
//   ...state,
//   contacts: {
//     ...state.contacts,
//     items: state.contacts.items.push(action.payload),
//   },
// };

// state.contacts.items.push(action.payload)