import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./features/alert/alertSlice";

export default configureStore({
  reducer: {
    alert: alertReducer,
  },
});
