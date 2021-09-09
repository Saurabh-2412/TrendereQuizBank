import { QUIZ_INITIAL_STATE, ACTION } from "./QuizReducerType";
import { Quiz } from "../Data/DataType";

export const quizInitialState: QUIZ_INITIAL_STATE = {
  allQuizzes:null,
  currentQuiz:null,
  quizId:"",
  questionNo:0,
  score:0,
  isClickEnabled:true
};

export function quizReducer ( state: QUIZ_INITIAL_STATE, action:ACTION) : QUIZ_INITIAL_STATE {
  switch(action.type) {
  
    case "RESET_STATE":
      //console.log("qis",quizInitialState);
      return {
        ...quizInitialState,
        allQuizzes: state.allQuizzes,
      };

    case "INITIALIZE_ALL_QUIZZES":
      //console.log(action.payload);
      return {
        ...state,
        allQuizzes: action.payload.allQuizzes
      }

    case "INITIALIZE_CURRENT_QUIZ":
      const { quizId } = action.payload;
      //console.log(quizId)
      const selectedQuiz = state.allQuizzes?.find((quiz) => quiz.id === quizId) as Quiz;
      //console.log("selectedQuiz",selectedQuiz);
      selectedQuiz.questions.forEach((question) => (question.selectedOptionId = null));
      return {
        ...state,
        currentQuiz: selectedQuiz,
      };
    
    case "SET_SELECTED_OPTION_ID":
      console.log("SET_SELECTED_OPTION_ID",action.payload);
      const { optionId, questionId } = action.payload;
      return {
        ...state,
        currentQuiz: {
          ...state.currentQuiz,
          questions: state.currentQuiz?.questions.map((question) => {
            return question.id === questionId
              ? {
                  ...question,
                  selectedOptionId: optionId,
                }
              : question;
          }),
        } as Quiz,
      };

    case "INCREMENT_SCORE":
      //console.log(action.payload);
      return {
        ...state,
        score: state.score + action.payload.score,
      };

    case "INCREMENT_QUESTION_NO":
      return {
        ...state,
        questionNo: state.questionNo + 1,
      };

    case "SET_QUIZ_ID":
      return {
        ...state,
        quizId: action.payload.quizId,
      };

    case "ENABLE_CLICK":
      return {
        ...state,
        isClickEnabled: true,
      };

    case "DISABLE_CLICK":
      return {
        ...state,
        isClickEnabled: false,
      };

    default: return state;
  }
}
  