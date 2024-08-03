import { Outlet } from "react-router-dom";
import NavComponent from "./components/nav-component";

const Layout = () => {
  return (
    <div className="layout">
      <NavComponent />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
