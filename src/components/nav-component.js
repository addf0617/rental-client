import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";

import AuthService from "../services/auth_service";

const NavComponent = () => {
  const { currentUser, setCurrentUser } = useUser();
  const Navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    AuthService.logout();
    window.alert("登出成功");
    setCurrentUser(AuthService.logout());
    Navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-md">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  首頁
                </NavLink>
              </li>
              {!currentUser && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    登入
                  </NavLink>
                </li>
              )}
              {!currentUser && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    註冊
                  </NavLink>
                </li>
              )}
              {currentUser && (
                <li className="nav-item">
                  <NavLink onClick={handleLogout} className="nav-link" to="/">
                    登出
                  </NavLink>
                </li>
              )}
              {currentUser && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    個人檔案
                  </NavLink>
                </li>
              )}
              {currentUser && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/post">
                    刊登
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavComponent;
