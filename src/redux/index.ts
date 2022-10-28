import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";

import rootReducer from "./modules";

export type RootState = ReturnType<typeof rootReducer>;

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });

export const reduxWrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});
