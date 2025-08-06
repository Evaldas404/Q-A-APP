import styles from "./button.module.css";

type ButtonProps = {
  title: string;
};

const Button = ({ title }: ButtonProps) => {
  return <button className={styles.main}>{title}</button>;
};

export default Button;
