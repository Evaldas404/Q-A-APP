/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "./registerForm.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { register } from "@/pages/api/fetch";
import { AxiosError } from "axios";
import logo from "../../assets/logo.svg";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const registerHandle = async () => {
    if (!name || !email || !password) {
      setErrorMessage("Fill all the fields");
      setError(true);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email");
      setError(true);
      return;
    }
    if (password.length < 10) {
      setErrorMessage("Password must be at least 10 characters.");
      setError(true);
      return;
    }

    try {
      const registerData = {
        name: name,
        email: email,
        password: password,
      };

      const response = await register(registerData);

      if (response.status === 201) {
        Cookies.set("@user_jwt", response.data.jwt);
        setTimeout(() => {
          router.push("/");
        }, 500);
        setSuccess(true);
        return;
      }
    } catch (err) {
      const error = err as AxiosError;

      if (error.response?.status === 409) {
        setError(true);
        setErrorMessage("User with this email already exists.");
      }
    }
  };

  return (
    <div className={styles.main}>
      <img src={logo.src} />
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (e.target.value && email && password.length >= 10) {
              setError(false);
              setErrorMessage("");
            }
          }}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (name && e.target.value && password.length >= 10) {
              setError(false);
              setErrorMessage("");
            }
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (name && email && e.target.value.length >= 10) {
              setError(false);
              setErrorMessage("");
            }
          }}
        />
        <button onClick={registerHandle}>Register</button>
        {error && <p className={styles.errorMessage}>{errorMessage}</p>}
        {success && (
          <p className={styles.successMessage}>Registered successfully</p>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
