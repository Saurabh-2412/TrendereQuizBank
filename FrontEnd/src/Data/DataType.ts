export type Option = {
    id: string;
    content: string;
    isAnswer: boolean;
  };
  
  export type Question = {
    id: string;
    question: string;
    points: number;
    options: Array<Option>;
    selectedOptionId?: string | null;
  };
  
  export type Quiz = {
    id: string;
    name: string;
    totalScore: number;
    questions: Array<Question>;
  };
  