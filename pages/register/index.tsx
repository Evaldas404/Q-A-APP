import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Header from "@/components/Header/Header";
import { headerLinks } from "@/links/headerLinks";

const registerPage = () => {
  return (
    <>
      <Header links={headerLinks} />
      <RegisterForm />
    </>
  );
};

export default registerPage;
