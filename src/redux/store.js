import { configureStore } from "@reduxjs/toolkit";
import compoundInterestReducer from "./slices/compoundInterestSlice";

export default configureStore({
  reducer: {
    compoundInterest: compoundInterestReducer,
  },
});
