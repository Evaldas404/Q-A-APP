import { deleteAnswerById } from "@/pages/api/fetch";
import styles from "./answer.module.css";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useState } from "react";

type AnswerCardProps = {
  answerText: string;
  id: string;
  onDelete: (id: string) => void;
};

const AnswerCard = ({ id, answerText, onDelete }: AnswerCardProps) => {
  const [deletedInitiated, setDeletedInitiated] = useState(false);

  const deleteHandle = async (id: string) => {
    try {
      const response = await deleteAnswerById(id);
      if (response.status === 200) {
        onDelete(id);
        setDeletedInitiated(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <h1>{answerText}</h1>
      <button
        className={styles.deleteBtn}
        onClick={() => {
          setDeletedInitiated(true);
        }}
      >
        Delete
      </button>
      {deletedInitiated && (
        <ConfirmModal
          title="Do you really want to delete ?"
          onCancel={() => setDeletedInitiated(false)}
          onConfirm={() => deleteHandle(id)}
        />
      )}
    </div>
  );
};

export default AnswerCard;
