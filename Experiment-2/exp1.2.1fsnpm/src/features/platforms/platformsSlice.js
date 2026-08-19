import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  platforms: [
    "Twitter",
    "Instagram",
    "LinkedIn",
    "Facebook",
  ],
};

const platformsSlice = createSlice({
  name: "platforms",
  initialState,
  reducers: {},
});

export default platformsSlice.reducer;