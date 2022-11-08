import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { getSession, signOut } from "next-auth/react";
import { setLoginModalOpen } from "@redux/modules/modals";
import { MUSICBOOK_URL } from "./constant";
import { setSideBarOpen } from "@redux/modules/common";

/**
 * 로그인 Modal을 표시하는 함수
 * @param dispatch Redux dispatch
 * @param isOpen 로그인 Modal 표시 여부
 */
export const openLoginModal = async (dispatch: Dispatch<AnyAction>, isOpen: boolean) => {
  if (!(await getSession())) {
    dispatch(setLoginModalOpen(isOpen));
  }
};

/**
 * 개발 모드에서 console.log를 출력하는 함수
 * @param tag 로그의 유형
 * @param args 로그 출력 값
 */
export const consoleLog = (tag: string, ...args: any[]) => {
  if (process.env.NODE_ENV === "development") console.log(`[${tag}]`, ...args);
};

/**
 * 특정 사용자 id에 대응되는 노래책 URL를 반환 함수
 * @param id 노래책 URL을 얻을 특정 사용자 id
 * @returns 특정 사용자 id의 노래책 URL
 */
export const getUserbookURL = (id: string) => `${MUSICBOOK_URL.book}/${id}`;

/**
 * 로그인 여부에 따라 홈 href를 반환하는 함수
 * @param status NextAuth Session 객체의 status 프로퍼티
 * @returns 비로그인시 '/' 반환, 로그인시 '/main' 반환
 */
export const getGoToHomeHref = (status: SessionStatus) =>
  status === "authenticated" ? MUSICBOOK_URL.main : MUSICBOOK_URL.index;

/**
 * 로그인 여부에 따라 로그인과 로그아웃을 실행하는 함수
 * @param dispatch Redux dispatch
 * @param status NextAuth Session 객체의 status 프로퍼티
 */
export const logInOut = async (dispatch: Dispatch<AnyAction>, status: SessionStatus) => {
  if (status === "unauthenticated") await openLoginModal(dispatch, true);
  else if (status === "authenticated") await signOut({ callbackUrl: `${window.location.origin}/` });
};

/**
 * 공통 사이드바를 표시하는 함수
 * @param dispatch Redux dispatch
 * @param isOpen 공통 사이드바 표시 여부
 */
export const openSidebar = (dispatch: Dispatch<AnyAction>, isOpen: boolean) => {
  dispatch(setSideBarOpen(isOpen));
};

/**
 * SSR을 위한 정적 URL 경로를 반환하는 함수
 * @returns 정적 URL 경로 배열
 */
export const getStaticPathArray = () => {
  const staticPathsArray: string[] = [];
  const keys = Object.keys(MUSICBOOK_URL).filter((x) => x !== "index");
  for (const key of keys) {
    staticPathsArray.push(MUSICBOOK_URL[key]);
  }
  return staticPathsArray;
};
