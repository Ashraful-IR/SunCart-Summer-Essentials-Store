import FooterPage from "@/components/shared/Footer";
import NavPage from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavPage />
      {children}
      <FooterPage />
    </>
  );
};

export default MainLayout;
