import configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice.js";
import { filtersReducer } from "./filtersSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistContactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsReducer,
);

const rootReducer = {
  contacts: persistedContactsReducer,
  filters: filtersReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
