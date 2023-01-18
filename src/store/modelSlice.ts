import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface ModelState {
  url: string;
  size: number;
  posX: number;
  posY: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
}

const initialState: ModelState = {
  url: "",
  size: 0,
  posX: 0,
  posY: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
};

export const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setStoreSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },
    setStorePosX: (state, action: PayloadAction<number>) => {
      state.posX = action.payload;
    },
    setStorePosY: (state, action: PayloadAction<number>) => {
      state.posY = action.payload;
    },
    setStoreRotateX: (state, action: PayloadAction<number>) => {
      state.rotateX = action.payload;
    },
    setStoreRotateY: (state, action: PayloadAction<number>) => {
      state.rotateY = action.payload;
    },
    setStoreRotateZ: (state, action: PayloadAction<number>) => {
      state.rotateZ = action.payload;
    },
  },
});

export const {
  setUrl,
  setStoreSize,
  setStorePosX,
  setStorePosY,
  setStoreRotateX,
  setStoreRotateY,
  setStoreRotateZ,
} = modelSlice.actions;

export const selectUrl = (state: RootState) => state.model.url;
export const selectSize = (state: RootState) => state.model.size;
export const selectPosX = (state: RootState) => state.model.posX;
export const selectPosY = (state: RootState) => state.model.posY;
export const selectRotateX = (state: RootState) => state.model.rotateX;
export const selectRotateY = (state: RootState) => state.model.rotateY;
export const selectRotateZ = (state: RootState) => state.model.rotateZ;

export default modelSlice.reducer;
