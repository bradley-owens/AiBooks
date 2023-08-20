import { configureStore } from "@reduxjs/toolkit";
import { websiteReducer } from "./websiteSlice";

const store = configureStore({
  reducer: {
    website: websiteReducer,
  },
});

export default store;
