import { Book, Music } from "@src/types/musicBookCard";
import testImage1 from "@public/images/test/test1.png";
import testImage2 from "@public/images/test/test2.jpg";

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

export const SORT_ORDER_MAP: Record<SortOrderType, string> = {
  newest: "최신순",
  popular: "인기순",
  songtitle: "곡명순",
  singername: "가수명순",
} as const;

export const demoMusicObject: Music = {
  uid: "xxxx",
  command: "!p",
  thumbnailSrc: testImage1,
  songTitle: "Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)",
  authorName: "호쇼 마린",
  broadcasterName: "betaman",
  broadcasterProfileSrc: testImage2,
  categoryName: "J-POP",
};
export const demoBookObject: Book = {
  uid: "xxxx",
  command: "!p",
  thumbnailSrc: testImage2,
  bookTitle: "베타맨의 노래책",
  broadcasterName: "betaman",
  broadcasterProfileSrc: testImage2,
  registedSongCount: 10,
};
