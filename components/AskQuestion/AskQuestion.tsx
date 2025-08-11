import { useState } from "react";
import styles from "./askQuestion.module.css";
import { addQuestion } from "@/pages/api/fetch";
import { Question } from "@/types/question";

type AskQuestionProps = {
  onQuestionAdded: (newQuestion: Question) => void;
};

const AskQuestion = ({ onQuestionAdded }: AskQuestionProps) => {
  const [text, setText] = useState("");

  const onAddQuestion = async () => {
    try {
      const question = {
        text: text,
      };

      const response = await addQuestion(question);

      if (response.status === 201) {
        setText("");
        onQuestionAdded(response.data.question);

        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Ask a Question</h1>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="What's on your mind ?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={onAddQuestion}>Submit</button>
      </div>
    </div>
  );
};

export default AskQuestion;
