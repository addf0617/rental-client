import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth_service";

const RegisterPage = () => {
  let Navigate = useNavigate();
  let [userdata, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  let [message, setMessage] = useState("");

  const handleChangeUsername = (e) => {
    setUserdata({ ...userdata, username: e.target.value });
  };

  const handleChanegeEmail = (e) => {
    setUserdata({ ...userdata, email: e.target.value });
  };

  const handleChangePassword = (e) => {
    setUserdata({ ...userdata, password: e.target.value });
  };

  const handleChangePhoneNumber = (e) => {
    setUserdata({ ...userdata, phoneNumber: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(userdata);
      window.alert("註冊成功");
      setMessage("");
      Navigate("/login");
    } catch (error) {
      console.log(error);
      if (error.response) setMessage(error.response.data.message);
      else setMessage(error.message);
    }
  };

  return (
    <div className="container-md d-flex justify-content-center align-items-center my-5 ">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3 text-center">
          <h4>
            <strong>Register</strong>
          </h4>
        </div>
        {message && <div className="alert alert-danger">{message}</div>}
        <div className="row mb-3">
          <label htmlFor="inputUsername" className="col-sm-4 col-form-label">
            Username：
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              name="username"
              placeholder="用戶名"
              minLength={2}
              maxLength={20}
              onChange={handleChangeUsername}
              required
            />
          </div>
        </div>
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
              minLength={5}
              maxLength={30}
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
              minLength={5}
              maxLength={50}
              placeholder="密碼"
              onChange={handleChangePassword}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPhoneNumber" className="col-sm-4 col-form-label">
            PhoneNumber：
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="inputPhoneNumber"
              name="phoneNumber"
              placeholder="電話"
              onChange={handleChangePhoneNumber}
              required
            />
          </div>
        </div>
        <div className="row">
          <button type="submit" className="btn btn-primary my-3">
            註冊
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
