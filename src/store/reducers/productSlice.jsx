import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        load: (state, action) => {
            state.data = action.payload;
        },
        create: (state, action) => {
            // state -> current initialState
            // action -> {type, payload(data)}
            // console.log(action);
            state.data.push(action.payload);
        },
    },
});

export default productSlice.reducer; //data
export const { create, load } = productSlice.actions; // functioanlity to update state
