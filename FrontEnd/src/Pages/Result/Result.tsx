import { Header } from "../../Components";
import { useData } from "../../Context/QuizContext";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const {
    state: { score, currentQuiz }
  } = useData();
  const navigate = useNavigate();

  function QuizNavigator(){
    navigate('/')
  }

  return (
    <div>
      <Header title="Result" />
      <div className="container px-4 py-16">
        <p className="text-2xl font-bold text-center">
          Final Score: {score} / {currentQuiz?.totalScore}
        </p>
        {currentQuiz?.questions.map((question) => (
          <div className="my-16">
            <p className="font-bold my-4 text-lg">{question.question}</p>
            {question.options.map((option) => (
              <div>
                <p
                  className={`block w-full text-center font-semibold rounded-3xl text-lg my-6 py-6 bg-gray-800 transition-colors duration-200 ease-in ${
                    option.isAnswer && "bg-green-600"
                  } ${
                    option.id === question.selectedOptionId &&
                    !option.isAnswer &&
                    "bg-red-600"
                  }`}
                >
                  {option.content}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="px-4 py-3">
        <h3 className="text-2xl md:text-3xl font-bold text-center" onClick={QuizNavigator}><i className="text-2xl md:text-3xl font-bold material-icons">&#xe5d5;</i>would you like to try again..?</h3>
      </div>
    </div>
  );
}
