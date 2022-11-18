import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MusicBook } from "@src/types/musicBookCard";

export interface ModalsState {
  loginModalOpen: boolean;
  editProfileModalOpen: boolean;
  configAccountModalOpen: boolean;
  showMusicCardModalOpen: boolean;
  selectedMusicBook: MusicBook | null;
}

const initialState: ModalsState = {
  loginModalOpen: false,
  editProfileModalOpen: false,
  configAccountModalOpen: false,
  showMusicCardModalOpen: false,
  selectedMusicBook: null,
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
    setSelectedMusicBook: (state, action: PayloadAction<MusicBook | null>) => {
      state.selectedMusicBook = action.payload;
      state.showMusicCardModalOpen = !!action.payload;
    },
  },
});

export const {
  setLoginModalOpen,
  setEditProfileModalOpen,
  setConfigAccountModalOpen,
  setSelectedMusicBook,
} = modalsSlice.actions;
export type ModalsAction = ReturnType<
  | typeof setLoginModalOpen
  | typeof setEditProfileModalOpen
  | typeof setConfigAccountModalOpen
  | typeof setSelectedMusicBook
>;

export default modalsSlice.reducer;
