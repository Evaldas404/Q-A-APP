import { Question } from "@/types/question";
import styles from "./questionWrapper.module.css";
import QuestionCard from "../Question/QuestionCard";

type QuestionWrapperProps = {
  questions: Question[];
  onDelete: (id: string) => void;
};

const QuestionWrapper = ({ questions, onDelete }: QuestionWrapperProps) => {
  const onAnswerAdded = () => {
    console.log("AA");
  };
  return (
    <div className={styles.main}>
      {questions.map((q) => {
        return (
          <QuestionCard
            id={q.id}
            key={q.id}
            text={q.text}
            onDelete={onDelete}
            onAnswerAdded={onAnswerAdded}
          />
        );
      })}
    </div>
  );
};

export default QuestionWrapper;
