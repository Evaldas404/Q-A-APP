/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./confirmModal.module.css";
import cross from "../../assets/cross.svg";

type ConfirmModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
};

const ConfirmModal = ({ onCancel, onConfirm, title }: ConfirmModalProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <button className={styles.exitBtn} onClick={onCancel}>
          <img src={cross.src} />
        </button>
      </div>
      <div className={styles.middle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.bottom}>
        <button onClick={onConfirm} className={styles.deleteBtn}>
          DELETE
        </button>
        <button onClick={onCancel}>CANCEL</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
