import { Question } from "@/types/question";
import styles from "./questionWrapper.module.css";
import QuestionCard from "../Question/QuestionCard";
import { Answer } from "@/types/answer";

type QuestionWrapperProps = {
  questions: Question[];
  answers: Answer[];
  onDelete: (id: string) => void;
};

const QuestionWrapper = ({ questions, onDelete }: QuestionWrapperProps) => {
  const onAnswerAdded = (newAnswer: Answer) => {
    console.log("New answer added:", newAnswer);
  };
  return (
    <div className={styles.main}>
      {questions.map((q) => {
        return (
          <QuestionCard
            id={q.id}
            key={q.id}
            text={q.questionText}
            onDelete={onDelete}
            onAnswerAdded={onAnswerAdded}
          />
        );
      })}
    </div>
  );
};

export default QuestionWrapper;
