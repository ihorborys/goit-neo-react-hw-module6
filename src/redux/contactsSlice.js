import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
  },
});

export const add = contactsSlice.actions.addContact;

export const contactsReducer = contactsSlice.reducer;


// const contactsInitialState = { items: [] };
//
// export const deleteContactAction = createAction("deleteContact");
//
// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: contactsInitialState,
//   reducers: {
//     addContact(state, action) {},
//     deleteContact(state, action) {},
//   },
// });
//
// export const contactsReducer = createReducer(
//   contactsInitialState,
//   (builder) => {
//     builder
//       .addCase(addContact, (state, action) => {})
//       .addCase(deleteContact, (state, action) => {});
//   },
// );
//
// // const initialState = {
// //   contacts: {
// //     items: [],
// //   },
// // };
// //
//
// //
// // export const contactsReducer = createReducer (initialState, (builder) => {
// //   console.log(action);
// // builder
// //     .addCase(addContactAction, (state, {payload}) => {
// //         return {
// //             ...state,
// //             items: {
// //                 id: generatedId(),
// //                 name: "",
// //                 number: "",
// //             },
// //         }
//
// //     case "deleteContact":
// //       return {
// //         ...state,
// //         counter: {
// //           ...state.counter,
// //           value: state.counter.value - action.payload,
// //         },
// //       };
// //     default:
// //       return state;
// //   }
// // };
//
// // const addContact = (newContact) => {
// //   setContacts((contacts) => {
// //     return [...contacts, newContact];
// //   });
// // };
// //
// // const deleteContact = (contactId) => {
// //   setContacts((contacts) => {
// //     return contacts.filter((contact) => contact.id !== contactId);
// //   });
// // };
