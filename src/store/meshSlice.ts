import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface MeshState {
  uuid: string;
  radius: number;
  height: number;
  sides: number;
  posX: number;
  posY: number;
  color: string;
}

const initialState: MeshState = {
  uuid: "",
  radius: 0,
  height: 0,
  sides: 0,
  posX: 0,
  posY: 0,
  color: "",
};

export const meshSlice = createSlice({
  name: "mesh",
  initialState,
  reducers: {
    setUuid: (state, action: PayloadAction<string>) => {
      state.uuid = action.payload;
    },
    setRadius: (state, action: PayloadAction<number>) => {
      state.radius = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    setSides: (state, action: PayloadAction<number>) => {
      state.sides = action.payload;
    },
    setPosX: (state, action: PayloadAction<number>) => {
      state.posX = action.payload;
    },
    setPosY: (state, action: PayloadAction<number>) => {
      state.posY = action.payload;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const {
  setUuid,
  setRadius,
  setHeight,
  setSides,
  setPosX,
  setPosY,
  setColor,
} = meshSlice.actions;

export const selectUuid = (state: RootState) => state.mesh.uuid;
export const selectRadius = (state: RootState) => state.mesh.radius;
export const selectHeight = (state: RootState) => state.mesh.height;
export const selectSides = (state: RootState) => state.mesh.sides;
export const selectPosX = (state: RootState) => state.mesh.posX;
export const selectPosY = (state: RootState) => state.mesh.posY;
export const selectColor = (state: RootState) => state.mesh.color;

export default meshSlice.reducer;
