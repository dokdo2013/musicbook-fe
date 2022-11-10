import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalsState {
  loginModalOpen: boolean;
  editProfileModalOpen: boolean;
  configAccountModalOpen: boolean;
}

const initialState: ModalsState = {
  loginModalOpen: false,
  editProfileModalOpen: false,
  configAccountModalOpen: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setLoginModalOpen: (state, action: PayloadAction<boolean>) => {
      state.loginModalOpen = action.payload;
    },
    setEditProfileModalOpen: (state, action: PayloadAction<boolean>) => {
      state.editProfileModalOpen = action.payload;
    },
    setConfigAccountModalOpen: (state, action: PayloadAction<boolean>) => {
      state.configAccountModalOpen = action.payload;
    },
  },
});

export const { setLoginModalOpen, setEditProfileModalOpen, setConfigAccountModalOpen } =
  modalsSlice.actions;
export type ModalsAction = ReturnType<
  typeof setLoginModalOpen | typeof setEditProfileModalOpen | typeof setConfigAccountModalOpen
>;

export default modalsSlice.reducer;
