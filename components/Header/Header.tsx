/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./header.module.css";
import logo from "../../assets/logo.svg";
import burgerMenu from "../../assets/burgerMenu.svg";
import Link from "next/link";
import Button from "../Buttons/Button/Button";
import { useState } from "react";

type HeaderProps = {
  links: {
    title: string;
    link: string;
  }[];
};

const Header = ({ links }: HeaderProps) => {
  const [burgerBtnOpen, setBurgerBtnOpen] = useState(false);

  const toggleBurgerBtnOpen = () => {
    setBurgerBtnOpen(!burgerBtnOpen);
  };
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src={logo.src} />
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
          <Button title="Login" />
          <Button title="Register" />
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
          <Button title="Login" />
          <Button title="Register" />
        </div>
      </div>
    </div>
  );
};

export default Header;
