import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Music } from "@src/types/musicBookCard";

export interface ModalsState {
  loginModalOpen: boolean;
  editProfileModalOpen: boolean;
  configAccountModalOpen: boolean;
  showMusicCardModalOpen: boolean;
  selectedMusic: Music | null;
}

const initialState: ModalsState = {
  loginModalOpen: false,
  editProfileModalOpen: false,
  configAccountModalOpen: false,
  showMusicCardModalOpen: false,
  selectedMusic: null,
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
    setSelectedMusic: (state, action: PayloadAction<Music | null>) => {
      state.selectedMusic = action.payload;
      state.showMusicCardModalOpen = !!action.payload;
    },
  },
});

export const {
  setLoginModalOpen,
  setEditProfileModalOpen,
  setConfigAccountModalOpen,
  setSelectedMusic,
} = modalsSlice.actions;
export type ModalsAction = ReturnType<
  | typeof setLoginModalOpen
  | typeof setEditProfileModalOpen
  | typeof setConfigAccountModalOpen
  | typeof setSelectedMusic
>;

export default modalsSlice.reducer;
