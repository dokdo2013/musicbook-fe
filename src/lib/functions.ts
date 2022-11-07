import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { getSession } from "next-auth/react";
import { setLoginModalOpen } from "@redux/modules/modals";

export const openLoginModal = async (dispatch: Dispatch<AnyAction>, isOpen: boolean) => {
  if (!(await getSession())) {
    dispatch(setLoginModalOpen(isOpen));
  }
};

export const consoleLog = (tag: string, ...args: any[]) => {
  if (process.env.NODE_ENV === "development") console.log(`[${tag}]`, ...args);
};
