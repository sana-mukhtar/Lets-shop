import { configureStore } from "@reduxjs/toolkit";
import productReducers from "../features/product-list/ProductListSlice"

export const store = configureStore({
  reducer : {
    product : productReducers
  }
})