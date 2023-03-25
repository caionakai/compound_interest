import { createSlice } from "@reduxjs/toolkit";

export const compoundInterestSlice = createSlice({
  name: "counter",
  initialState: {
    interestRateFrequency: "yearly",
    periodFrequency: "yearly",
    interestRate: "",
    period: "",
    initialValue: "",
    monthlyValue: "",
    results: { total: "", totalInvested: "", interest: "" },
  },
  reducers: {
    setInterestRateFrequency: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.interestRateFrequency = action.payload;
    },
    setPeriodFrequency: (state, action) => {
      state.periodFrequency = action.payload;
    },
    setInterestRate: (state, action) => {
      state.interestRate = action.payload;
    },
    setPeriod: (state, action) => {
      state.period = action.payload;
    },
    setInitialValue: (state, action) => {
      state.initialValue = action.payload;
    },
    setMonthlyValue: (state, action) => {
      state.monthlyValue = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setInterestRateFrequency,
  setPeriodFrequency,
  setInterestRate,
  setPeriod,
  setInitialValue,
  setMonthlyValue,
  setResults,
} = compoundInterestSlice.actions;

export default compoundInterestSlice.reducer;
