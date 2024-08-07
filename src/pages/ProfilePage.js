import React from "react";
import { useUser } from "../context/userContext";

const ProfilePage = () => {
  const { currentUser, setCurrentUser } = useUser();
  console.log(currentUser);

  return (
    <div>
      {!currentUser && (
        <div className="container">
          <div className="alert alert-danger">必須要先登入才能預覽</div>
        </div>
      )}
      {currentUser && (
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <td>個人資料</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>姓名：{currentUser.user.username}</td>
              </tr>
              <tr>
                <td>電話號碼：{currentUser.user.phoneNumber}</td>
              </tr>
              <tr>
                <td>信箱：{currentUser.user.email}</td>
              </tr>
            </tbody>
            <button className="btn btn-danger">刪除帳號</button>
          </table>
          <div>已刊登的房屋</div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
