// import { createReducer, configureStore , createAction } from "@reduxjs/toolkit";

// interface StateType {
//     count : number
// }
// const intialState: StateType = {
//     count : 0
// }

// export const increment = createAction("increment")
// export const decrement = createAction("decrement")

// const rootReducer = createReducer(intialState, (builder) => {
//     builder.addCase(increment, (state) => {
//             state.count = state.count + 1
//     })
//         .addCase(decrement, (state) => {
//         state.count = state.count - 1
//     })
// })

// export const store = configureStore({reducer :rootReducer })



// //////////////////////////// use redux slize
import { configureStore , createSlice, PayloadAction  } from "@reduxjs/toolkit";

export interface StateType {
    count : number
}
const intialState: StateType = {
    count : 0
}

const rootSlice = createSlice({
    name: "counter", 
    initialState: intialState, 
    reducers: {
        increment: (state , action : PayloadAction<number>) => {
            state.count = state.count + action.payload
        },
        decrement: (state , action) => {
            state.count = state.count - action.payload
        }
    }
})

export const { increment, decrement } = rootSlice.actions

export const store = configureStore({reducer :rootSlice.reducer})