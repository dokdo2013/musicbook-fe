export const MAX_FRAME_WIDTH_PX = 1400;
export const HEADER_HEIGHT_PX = 80;
export const FOOTER_HEIGHT_PX = 60;
export const GLOBAL_PADDING_1 = 30;
export const GLOBAL_PADDING_2 = 20;
export const GLOBAL_PADDING_3 = 10;
export const GLOBAL_PADDING_4 = 5;
export const MUSICBOOK_URL = {
  index: "/",
  main: "/main",
  mypage: "/mypage",
  book: "/book",
  guide: "/guide",
} as const;
export type MUSICBOOK_URL_SHAPE = typeof MUSICBOOK_URL;
export type MUSICBOOK_URL_KEYS = keyof MUSICBOOK_URL_SHAPE;
export type MUSICBOOK_VALUES = MUSICBOOK_URL_SHAPE[MUSICBOOK_URL_KEYS];
