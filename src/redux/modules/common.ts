import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  sideBarOpen: boolean;
  loadingScreenOpen: boolean;
}

const initialState: CommonState = { sideBarOpen: false, loadingScreenOpen: false };

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setSideBarOpen: (state, action: PayloadAction<boolean>) => {
      state.sideBarOpen = action.payload;
    },
    setLoadingScreenOpen: (state, action: PayloadAction<boolean>) => {
      state.loadingScreenOpen = action.payload;
    },
  },
});

export const { setSideBarOpen, setLoadingScreenOpen } = commonSlice.actions;
export type CommonAction = ReturnType<typeof setSideBarOpen | typeof setLoadingScreenOpen>;

export default commonSlice.reducer;
