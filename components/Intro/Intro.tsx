import Link from "next/link";
import styles from "./intro.module.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Intro = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("@user_jwt");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>
          Access quick answers to frequently asked questions and contribute by
          helping others with theirs.
        </h1>
        {isLoggedIn ? (
          " "
        ) : (
          <>
            <h1>Get started by signing up</h1>
            <Link href={"./register"}>
              <button className={styles.registerButton}>Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Intro;
