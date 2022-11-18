/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    TWITCH_ID: string;
    TWITCH_SECRET: string;
    JWT_SECRET: string;
    NEXTAUTH_SECRET: string;
  }
}

type SessionStatus = "authenticated" | "loading" | "unauthenticated";
type ModalType = "login" | "editProfile" | "configAccount";
type SortOrderType = "newest" | "popular" | "songtitle" | "singername";
type SortOrderDirection = "asc" | "desc";
type ColorSchemeType =
  | "whiteAlpha"
  | "blackAlpha"
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "cyan"
  | "purple"
  | "pink"
  | "linkedin"
  | "facebook"
  | "messenger"
  | "whatsapp"
  | "twitter"
  | "telegram";
