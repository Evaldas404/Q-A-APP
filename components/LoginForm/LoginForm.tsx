/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "./loginForm.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { login } from "@/pages/api/fetch";
import logo from "../../assets/logo.svg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const loginHandle = async () => {
    try {
      const loginData = {
        email: email,
        password: password,
      };

      const response = await login(loginData);

      if (response.status === 200) {
        Cookies.set("@user_jwt", response.data.jwt);
        setTimeout(() => {
          router.push("/");
        }, 500);
        setSuccess(true);
        setError(false);
        return;
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className={styles.main}>
      <img src={logo.src} />
      <div className={styles.wrapper}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginHandle}>Login</button>
        {error ? (
          <p className={styles.errorMessage}>Your email or password is wrong</p>
        ) : success ? (
          <p className={styles.successMessage}>Logged in successfully</p>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default LoginForm;
