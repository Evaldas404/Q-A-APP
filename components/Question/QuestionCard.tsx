import {
  deleteQuestionById,
  answerQuestion,
  getAnswersByQuestionId,
  deleteAnswerById,
} from "@/pages/api/fetch";
import styles from "./question.module.css";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useState, useEffect } from "react";
import { Answer } from "@/types/answer";
import AnswerCard from "../Answer/Answer";

type QuestionProps = {
  text: string;
  id: string;
  onDelete: (id: string) => void;
  onAnswerAdded: (newAnswer: Answer) => void;
};

const QuestionCard = ({ id, text, onDelete, onAnswerAdded }: QuestionProps) => {
  const [deletedInitiated, setDeletedInitiated] = useState(false);
  const [answerText, setAnswerText] = useState("");
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    getAnswersByQuestionId(id).then((res) => setAnswers(res.data.answers));
  }, [id]);

  const deleteHandle = async () => {
    try {
      const response = await deleteQuestionById(id);
      if (response.status === 200) {
        onDelete(id);
        setDeletedInitiated(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onAddAnswer = async () => {
    try {
      const response = await answerQuestion(id, answerText);
      if (response.status === 201) {
        setAnswerText("");
        setAnswers((prev) => [...prev, response.data.answer]);
        onAnswerAdded(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const answerDeleteHandle = async (answerId: string) => {
    try {
      const response = await deleteAnswerById(answerId);
      if (response.status === 200) {
        setAnswers((prev) => prev.filter((a) => a.id !== answerId));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.question}>
        <h1>{text}</h1>
        <button
          className={styles.deleteBtn}
          onClick={() => setDeletedInitiated(true)}
        >
          Delete
        </button>
        {deletedInitiated && (
          <ConfirmModal
            title="Do you really want to delete this question?"
            onCancel={() => setDeletedInitiated(false)}
            onConfirm={deleteHandle}
          />
        )}
      </div>
      <div className={styles.answers}>
        {answers.map((a) => (
          <AnswerCard
            key={a.id}
            id={a.id}
            answerText={a.answerText}
            onDelete={answerDeleteHandle}
          />
        ))}
      </div>

      <div className={styles.answerForm}>
        <input
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
          placeholder="Type your answer..."
        />
        <button onClick={onAddAnswer}>Post Answer</button>
      </div>
    </div>
  );
};

export default QuestionCard;
