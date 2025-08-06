/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./footer.module.css";
import logo from "../../assets/logoWhite.svg";
import instagramLogo from "../../assets/instagram.svg";
import facebookLogo from "../../assets/facebook.svg";
import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import twitterLogo from "../../assets/twitter.svg";
import appleButton from "../../assets/appleButton.png";
import playButton from "../../assets/playButton.png";
import Link from "next/link";

type FooterLink = {
  title: string;
  link: string;
};

type FooterProps = {
  pages: FooterLink[];
  company: FooterLink[];
  legal: FooterLink[];
};

const Footer = ({ pages, company, legal }: FooterProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <img className={styles.logo} src={logo.src} />
        <h4>
          EchoAnswers is continuing to grow as a community,
          <br /> and wisdom is leading the way.
        </h4>
        <div className={styles.icons}>
          <img src={instagramLogo.src} />
          <img src={facebookLogo.src} />
          <img src={twitterLogo.src} />
          <img src={githubLogo.src} />
          <img src={linkedinLogo.src} />
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <div className={styles.links}>
          <h2>Company</h2>
          <nav>
            <ul>
              {company.map((link, i) => (
                <li key={i}>
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.links}>
          <h2>Pages</h2>
          <nav>
            <ul>
              {pages.map((link, i) => (
                <li key={i}>
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.links}>
          <h2>Legal</h2>
          <nav>
            <ul>
              {legal.map((link, i) => (
                <li key={i}>
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.application}>
          <h2>Get an application</h2>
          <div className={styles.buttons}>
            <button>
              <img src={playButton.src} />
            </button>
            <button>
              <img src={appleButton.src} />
            </button>
          </div>
          <h4>Copyrights ©2025 EchoAnswers. All rights reserved.</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
