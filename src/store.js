import { configureStore } from "@reduxjs/toolkit";
import modeReducer from './ducks/modeSlice'

export const store = configureStore({
  reducer: modeReducer
});
