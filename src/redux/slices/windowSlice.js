import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: ""
};

const windowSlice = createSlice({
    name: "window",
    initialState,
    reducers: {
        setWindowType: (state,action) => {
            state.type = action.payload;
        },
        resetWindow: (state) => {
            state.type = ""
        }
    }
});

export const { setWindowType } = windowSlice.actions;
export default windowSlice.reducer;