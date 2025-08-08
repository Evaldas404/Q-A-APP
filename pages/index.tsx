import Template from "@/components/Template/Template";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const MainPage = () => {
  return (
    <Template>
      <div className={styles.main}>
        <div className={styles.content}>
          <h1>
            Access quick answers to frequently asked questions and contribute by
            helping others with theirs.
          </h1>
          <h1>Get started by signing up</h1>
          <Link href={"./register"}>
            <button className={styles.registerButton}>Register</button>
          </Link>
        </div>
      </div>
    </Template>
  );
};

export default MainPage;
