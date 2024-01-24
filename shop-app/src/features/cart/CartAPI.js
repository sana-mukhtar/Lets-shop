// import { createAppSlice } from "../../app/createAppSlice"
// // import type { AppThunk } from "../../app/store"
// import { fetchCount } from "./Cart"

// export interface CounterSliceState {
//   value: number
//   status: "idle" | "loading" | "failed"
// }

// const initialState: CounterSliceState = {
//   value: 0,
//   status: "idle",
// }

// export const counterSlice = createAppSlice({
//   name: "counter",

//   initialState,

//   reducers: create => ({
//     increment: create.reducer(state => {
//       state.value += 1
//     }),
//     decrement: create.reducer(state => {
//       state.value -= 1
//     }),
//   }),

//   selectors: {
//     selectCount: counter => counter.value,
//     selectStatus: counter => counter.status,
//   },
// })

// export const { decrement, increment } = counterSlice.actions

// export const { selectCount, selectStatus } = counterSlice.selectors
