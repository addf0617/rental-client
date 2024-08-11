import { Outlet } from "react-router-dom";
import NavComponent from "./components/nav-component";
import FooterComponent from "./components/footer-component";

const Layout = () => {
  return (
    <div className="layout">
      <NavComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
};

export default Layout;
