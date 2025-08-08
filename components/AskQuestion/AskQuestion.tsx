import { useState } from "react";
import styles from "./askQuestion.module.css";
import { addQuestion } from "@/pages/api/fetch";

const AskQuestion = () => {
  const [text, setText] = useState("");

  const onAddQuestion = async () => {
    try {
      const question = {
        text: text,
      };

      const response = await addQuestion(question);

      if (response.status === 201) {
        setText("");

        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <input
        type="text"
        placeholder="Ask a question"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onAddQuestion}>Submit</button>
    </div>
  );
};

export default AskQuestion;
