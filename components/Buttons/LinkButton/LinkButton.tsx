import Link from "next/link";
import styles from "./button.module.css";

type ButtonProps = {
  title: string;
  href: string;
};

const LinkButton = ({ title, href }: ButtonProps) => {
  return (
    <Link href={href}>
      <button className={styles.main}>{title}</button>
    </Link>
  );
};

export default LinkButton;
