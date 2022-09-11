import { createAction, ActionType, createReducer } from "typesafe-actions";

interface TestReducer {
  no: number;
  text: string;
}

const initState: TestReducer = {
  no: 0,
  text: "hello",
};

export const RESET_TEXT = "testReducer/RESET_TEXT";
export const ADD_TEXT = "testReducer/ADD_TEXT";
export const REMOVE_TEXT = "testReducer/REMOVE_TEXT";

export const resetText = createAction(RESET_TEXT)<TestReducer>();
export const addText = createAction(ADD_TEXT)<TestReducer>();
export const removeText = createAction(REMOVE_TEXT)<TestReducer>();

export const actions = { resetText, addText, removeText };
type TestReducerActions = ActionType<typeof actions>;

const testReducer = createReducer<TestReducer, TestReducerActions>(initState, {
  [RESET_TEXT]: () => ({
    no: 0,
    text: "",
  }),
  [ADD_TEXT]: (state, action) => {
    console.log(state.text);
    return {
      no: action.payload.no,
      text: action.payload.text,
    };
  },
  [REMOVE_TEXT]: (state) => ({
    no: state.no,
    text: "",
  }),
});

export default testReducer;
