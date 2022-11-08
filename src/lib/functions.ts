import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { getSession, signOut } from "next-auth/react";
import { setLoginModalOpen } from "@redux/modules/modals";
import { MUSICBOOK_URL } from "./constant";
import { setSideBarOpen } from "@redux/modules/common";

export const openLoginModal = async (dispatch: Dispatch<AnyAction>, isOpen: boolean) => {
  if (!(await getSession())) {
    dispatch(setLoginModalOpen(isOpen));
  }
};

export const consoleLog = (tag: string, ...args: any[]) => {
  if (process.env.NODE_ENV === "development") console.log(`[${tag}]`, ...args);
};

export const getUserbookURL = (id: string) => `${MUSICBOOK_URL.book}/${id}`;

export const getGoToHomeHref = (status: SessionStatus) =>
  status === "authenticated" ? MUSICBOOK_URL.main : MUSICBOOK_URL.index;

export const logInOut = async (dispatch: Dispatch<AnyAction>, status: SessionStatus) => {
  if (status === "unauthenticated") await openLoginModal(dispatch, true);
  else if (status === "authenticated") await signOut({ callbackUrl: `${window.location.origin}/` });
};

export const openSidebar = (dispatch: Dispatch<AnyAction>, isOpen: boolean) =>
  dispatch(setSideBarOpen(isOpen));

export const getStaticPathArray = () => {
  const staticPathsArray: string[] = [];
  const keys = Object.keys(MUSICBOOK_URL).filter((x) => x !== "index");
  for (const key of keys) {
    staticPathsArray.push(MUSICBOOK_URL[key]);
  }
  return staticPathsArray;
};
