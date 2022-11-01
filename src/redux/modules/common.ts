import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  sideBarOpen: boolean;
}

const initialState: CommonState = { sideBarOpen: false };

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setSideBarOpen: (state, action: PayloadAction<boolean>) => {
      state.sideBarOpen = action.payload;
    },
  },
});

export const { setSideBarOpen } = commonSlice.actions;
export type CommonAction = ReturnType<typeof setSideBarOpen>;

export default commonSlice.reducer;
