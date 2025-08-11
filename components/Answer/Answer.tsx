import { deleteQuestionById } from "@/pages/api/fetch";
import styles from "./question.module.css";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useState } from "react";

type AnswerCardProps = {
  text: string;
  id: string;
  onDelete: (id: string) => void;
};

const AnswerCard = ({ id, text, onDelete }: AnswerCardProps) => {
  const [deletedIniated, setDeletedIniated] = useState(false);

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

  return (
    <div className={styles.main}>
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
  );
};

export default AnswerCard;