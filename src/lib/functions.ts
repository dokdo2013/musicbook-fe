import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { setLoginModalOpen } from "../redux/modules/modals";

export const openLoginModal = (dispatch: Dispatch<AnyAction>, isOpen: boolean) =>
  dispatch(setLoginModalOpen(isOpen));
