import { deleteQuestionById } from "@/pages/api/fetch";
import styles from "./question.module.css";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useState } from "react";
import { Answer } from "@/types/answer";

type QuestionProps = {
  text: string;
  id: string;
  onDelete: (id: string) => void;
  onAnswerAdded: (newAnswer: Answer) => void;
};

const QuestionCard = ({ id, text, onDelete, onAnswerAdded }: QuestionProps) => {
  const [deletedIniated, setDeletedIniated] = useState(false);
  const [answerText, setAnswerText] = useState("");

  const deleteHandle = async (id: string) => {
    try {
      const response = await deleteQuestionById(id);
      if (response.status === 200) {
        onDelete(id);
        setDeletedIniated(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onAddAnswer = async (id: string) => {
    try {
      const answer = {
        text: answerText,
        id: id,
      };

      const response = await answerQuestion(answer);

      if (response.status === 201) {
        setAnswerText("");
        onAnswerAdded(response.data.answer);

        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.question}>
        <h1>{text}</h1>
        <button
          className={styles.deleteBtn}
          onClick={() => {
            setDeletedIniated(true);
          }}
        >
          Delete
        </button>
        {deletedIniated && (
          <ConfirmModal
            title="Do you really want to delete ?"
            onCancel={() => setDeletedIniated(false)}
            onConfirm={() => deleteHandle(id)}
          />
        )}
      </div>
      <input
        type="text"
        placeholder="Your oppinion"
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
      />
      <button onClick={() => onAddAnswer(id)}>Submit</button>
    </div>
  );
};

export default QuestionCard;
