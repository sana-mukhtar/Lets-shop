import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "./api/userAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userReducer } from "./reducer/userReducer";

// export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [userReducer.name]: userReducer.reducer,
  },
  //middleware: (mid) => [...mid(), userAPI.middleware],
  middleware: (mid) => mid().concat(userAPI.middleware),
});

setupListeners(store.dispatch);
