import { createContext, useContext, useReducer, FunctionComponent, useEffect } from "react";
import { DATA_CONTEXT } from "./QuizContextTypes";
import { quizInitialState, quizReducer } from "../Reducer/QuizReducer";
import { getAllQuizzes } from "../Services/quiz";

const DataContext = createContext<DATA_CONTEXT>({
    state: quizInitialState,
    dispatch: () => null
});

export const DataProvider: FunctionComponent = ({ children }) => {

  const [ state, dispatch ] = useReducer( quizReducer,quizInitialState );

  async function initAllQuizzes(){
    const allQuizzes = await getAllQuizzes();
    allQuizzes && dispatch({ type:"INITIALIZE_ALL_QUIZZES", payload: { allQuizzes } });
  };

  useEffect(() => {
    initAllQuizzes();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () =>  useContext(DataContext);