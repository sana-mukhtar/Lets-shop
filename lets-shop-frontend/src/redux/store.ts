import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "./api/userAPI";

export const server = http://localhost:3000;

export const store = configureStore({
  reducer: {
    userAPI: userAPI.reducer,
  },
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});


