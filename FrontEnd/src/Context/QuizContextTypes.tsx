import React from "react";
import { QUIZ_INITIAL_STATE } from "../Reducer/QuizReducerType";

export type DATA_CONTEXT = {
  state: QUIZ_INITIAL_STATE;
  dispatch: React.Dispatch<any>;
};
