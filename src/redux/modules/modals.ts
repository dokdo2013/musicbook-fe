import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalsState {
  loginModalOpen: boolean;
}

const initialState: ModalsState = { loginModalOpen: false };

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setLoginModalOpen: (state, action: PayloadAction<boolean>) => {
      state.loginModalOpen = action.payload;
    },
  },
});

export const { setLoginModalOpen } = modalsSlice.actions;
export type ModalsAction = ReturnType<typeof setLoginModalOpen>;

export default modalsSlice.reducer;
