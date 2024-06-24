// src/state/store.ts
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./index";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dishApi } from "../UI/pages/Menu/services/Menu";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dishApi.middleware),
});

setupListeners(store.dispatch);


export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
