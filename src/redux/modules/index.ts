import {
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import commonReducer, { CommonState } from "./common";

interface ReduxStates {
  common: CommonState;
}

const rootReducer: Reducer<CombinedState<ReduxStates>, AnyAction> = (
  state,
  action
) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    common: commonReducer,
  })(state, action);
};

export default rootReducer;
