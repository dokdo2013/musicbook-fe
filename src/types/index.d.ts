/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    TWITCH_CLIENT_ID: string;
    TWITCH_CLIENT_SECRET: string;
  }
}

type SessionStatus = "authenticated" | "loading" | "unauthenticated";
type ModalType = "login" | "editProfile" | "configAccount";
type SortOrderType = "newest" | "popular" | "songtitle" | "singername";
type SortOrderDirection = "asc" | "desc";
