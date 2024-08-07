import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import AuthService from "../services/auth_service";

const LoginPage = () => {
  let [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });
  let [message, setMessage] = useState("");
  let { currentUser, setCurrentUser } = useUser();
  const Navigate = useNavigate();

  const handleChanegeEmail = (e) => {
    setUserdata({ ...userdata, email: e.target.value });
  };

  const handleChangePassword = (e) => {
    setUserdata({ ...userdata, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await AuthService.login(userdata);
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      window.alert("登入成功");
      setMessage("");
      Navigate("/profile");
    } catch (error) {
      if (error.response) setMessage(error.response.data.message);
      else setMessage(error.message);
      console.log(error);
    }
  };

  return (
    <div className="container-md d-flex justify-content-center align-items-center my-5 ">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3 text-center">
          <h4>
            <strong>Login</strong>
          </h4>
        </div>
        {message && <div className="alert alert-danger">{message}</div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail" className="col-sm-4 col-form-label">
            Email：
          </label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              placeholder="信箱"
              onChange={handleChanegeEmail}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
            Password：
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              name="password"
              placeholder="密碼"
              onChange={handleChangePassword}
              required
            />
          </div>
        </div>
        <div className="row">
          <button type="submit" className="btn btn-primary my-3 ">
            登入
          </button>
        </div>
        <div className="row">
          <a onClick={() => Navigate("/register")} href="#">
            還沒有帳號嗎?點擊註冊一個吧!
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
