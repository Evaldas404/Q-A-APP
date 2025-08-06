import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { company, pages, legal } from "@/links/footerLinks";
import { headerLinks } from "@/links/headerLinks";

const MainPage = () => {
  return (
    <>
      <Header links={headerLinks} />
      <div></div>
      <div></div>
      <Footer pages={pages} company={company} legal={legal} />
    </>
  );
};

export default MainPage;
