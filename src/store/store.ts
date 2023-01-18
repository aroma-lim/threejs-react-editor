import { configureStore } from "@reduxjs/toolkit";
import meshReducer from "./meshSlice";
import modelReducer from "./modelSlice";

export const store = configureStore({
  reducer: {
    mesh: meshReducer,
    model: modelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
