import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  test: number;
}

const initialState: CommonState = { test: 0 };

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<number>) => {
      state.test = action.payload;
    },
  },
});

export const { setTest } = commonSlice.actions;
export type CommonAction = ReturnType<typeof setTest>;

export default commonSlice.reducer;
