import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    message: "",
    show: false,
    severety: "success",
  },
  reducers: {
    setAlert: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;
