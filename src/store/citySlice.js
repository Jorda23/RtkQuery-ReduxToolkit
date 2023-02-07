import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "city",
  initialState: {
    city: "Managua",
  },
  reducers: {
    setCity: (state, value) => {
      state.city = value.payload;
    },
  },
});

export const { setCity } = citySlice.actions;

export default citySlice.reducer;