/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./header.module.css";
import logo from "../../assets/logo.svg";
import burgerMenu from "../../assets/burgerMenu.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import LinkButton from "../Buttons/LinkButton/LinkButton";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

type HeaderProps = {
  links: {
    title: string;
    link: string;
  }[];
};

const Header = ({ links }: HeaderProps) => {
  const [burgerBtnOpen, setBurgerBtnOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("@user_jwt");
    setIsLoggedIn(!!token);
  }, []);

  const toggleBurgerBtnOpen = () => {
    setBurgerBtnOpen(!burgerBtnOpen);
  };

  const handleLogout = () => {
    Cookies.remove("@user_jwt");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <Link href="/">
          {" "}
          <img src={logo.src} />
        </Link>
      </div>
      <div className={styles.right}>
        <nav>
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <Link href={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.buttons}>
          {isLoggedIn ? (
            <button className={styles.logout} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <LinkButton title="Login" href="./login" />
              <LinkButton title="Register" href="./register" />
            </>
          )}
        </div>
      </div>
      <button className={styles.burger} onClick={toggleBurgerBtnOpen}>
        <img src={burgerMenu.src} />
      </button>
      <div
        className={`${styles.mobileNavMenu} ${
          burgerBtnOpen ? styles.mobileNavMenuOpen : ""
        }`}
      >
        <nav>
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <Link href={link.link} onClick={toggleBurgerBtnOpen}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mobileButtons}>
          {isLoggedIn ? (
            <button className={styles.logout} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <LinkButton title="Login" href="./login" />
              <LinkButton title="Register" href="./register" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
