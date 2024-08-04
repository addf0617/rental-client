import React from "react";

const RegisterPage = () => {
  return (
    <div className="container-md d-flex justify-content-center align-items-center my-5 ">
      <form>
        <div className="row mb-3 text-center">
          <h4>
            <strong>Register</strong>
          </h4>
        </div>
        <div className="row mb-3">
          <label for="inputUsername" className="col-sm-4 col-form-label">
            Username：
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              placeholder="用戶名"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-4 col-form-label">
            Email：
          </label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="信箱"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword" className="col-sm-4 col-form-label">
            Password：
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="密碼"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPhoneNumber" className="col-sm-4 col-form-label">
            PhoneNumber：
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="inputPhoneNumber"
              placeholder="電話"
              required
            />
          </div>
        </div>
        <div className="row">
          <button type="submit" className="btn btn-primary my-3 ">
            註冊
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
