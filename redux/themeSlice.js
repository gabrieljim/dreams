import { createSlice } from "@reduxjs/toolkit";
import theme from "constants/theme";

const themeSlice = createSlice({
  name: "theme",
  initialState: theme.dream,
  reducers: {
    setTheme: (state, payload) => {
      state = payload;
    }
  }
});

export default themeSlice.reducer;
