import { Link } from "react-router-dom";
import { useData } from "../../Context/QuizContext";
import { Quiz } from "../../Data/DataType";

type QUIZ_CARD = { quizItem: Quiz };

function QuizCard({ quizItem }: QUIZ_CARD) {
  return (
    <Link to={`/quiz/${quizItem.id}`}>
      <div className="bg-gray-800 rounded-3xl h-full">
        <div className="p-6" key={quizItem.id}>
          <h2 className="text-xl font-semibold mb-2">{quizItem.name}</h2>
        </div>
      </div>
    </Link>
  );
}

export default function QuizSelector() {
  const {
    state: { allQuizzes }
  } = useData();
  
  return (
    <section className="px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 container">
      {allQuizzes?.map((quizItem) => (
        <QuizCard quizItem={quizItem} />
      ))}
    </section>
  );
}