import { AnyAction, CombinedState, combineReducers, Reducer } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import commonReducer, { CommonState } from "./common";
import modalsReducer, { ModalsState } from "./modals";

export interface ReduxStates {
  common: CommonState;
  modals: ModalsState;
}

const rootReducer: Reducer<CombinedState<ReduxStates>, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    common: commonReducer,
    modals: modalsReducer,
  })(state, action);
};

export default rootReducer;
