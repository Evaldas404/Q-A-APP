import Header from "@/components/Header/Header";
import LoginForm from "@/components/LoginForm/LoginForm";
import { headerLinks } from "@/links/headerLinks";

const registerPage = () => {
  return (
    <>
      <Header links={headerLinks} />
      <LoginForm />
    </>
  );
};

export default registerPage;
