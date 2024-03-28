import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "./api/userAPI";

export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
  reducer:{
    userApi: userAPI.reducer,
  },
})