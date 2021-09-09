import { Quiz } from "../Data/DataType";

export type QUIZ_INITIAL_STATE = {
  allQuizzes : Array<Quiz> | null;
  currentQuiz : Quiz | null;
  quizId: string;
  questionNo: number;
  score: number;
  isClickEnabled:boolean;
};

export type ACTION =
  | { type: "RESET_STATE"; payload: { quizId: string } }
  | { type: "INITIALIZE_ALL_QUIZZES"; payload: { allQuizzes: Array<Quiz> } }
  | { type: "INITIALIZE_CURRENT_QUIZ"; payload: { quizId: string } }
  | {
      type: "SET_SELECTED_OPTION_ID";
      payload: { optionId: string; questionId: string };
    }
  | { type: "INCREMENT_SCORE"; payload: { score: number } }
  | { type: "INCREMENT_QUESTION_NO" }
  | { type: "SET_QUIZ_ID"; payload: { quizId: string } }
  | { type: "ENABLE_CLICK" }
  | { type: "DISABLE_CLICK" };