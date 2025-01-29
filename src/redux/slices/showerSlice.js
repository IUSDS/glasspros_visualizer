import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showerType: "",
  showerColor: "",
  showerStyle: "",
};

const showerSlice = createSlice({
  name: "shower",
  initialState,
  reducers: {
    setShowerType: (state, action) => {
      state.showerType = action.payload;
    },
    setShowerColor: (state, action) => {
      state.showerColor = action.payload;
    },
    setShowerStyle: (state, action) => {
      state.showerStyle = action.payload;
    },
    resetShower: (state) => {
      state.showerType = "";
      state.showerColor = "";
      state.showerStyle = "";
    },
  },
});

export const { setShowerType, setShowerColor, setShowerStyle, resetShower } = showerSlice.actions;
export default showerSlice.reducer;