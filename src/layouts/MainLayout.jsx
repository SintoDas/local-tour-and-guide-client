import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar/Nav";
import FooterSection from "../components/Footer/FooterSection";

const MainLayout = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-3 ">
      <Nav></Nav>
      <Outlet></Outlet>
      <FooterSection></FooterSection>
    </div>
  );
};

export default MainLayout;
