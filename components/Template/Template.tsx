import { headerLinks } from "@/links/headerLinks";
import styles from "./template.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { company, legal, pages } from "@/links/footerLinks";

type TemplateProps = {
  children: React.ReactNode;
};

const Template = ({ children }: TemplateProps) => {
  return (
    <div className={styles.container}>
      <Header links={headerLinks} />
      <div className={styles.content}>{children}</div>
      <Footer pages={pages} company={company} legal={legal} />
    </div>
  );
};

export default Template;
