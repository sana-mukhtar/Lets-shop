import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchAllProducts } from "./ProductListAPI"

export interface ProductListSliceState {
  entities: []
  status : 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState = {
  product: [],
  status: "idle" ,
}

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts()
    response.data
  },
)

export const ProductListSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
    extraReducers : (builder) => {
    builder
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
    }
  }

)
