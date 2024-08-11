import React, { useState, useEffect } from "react";
import { useUser } from "../context/userContext";

import RentList from "../components/rentList-component";
import rental_service from "../services/rental_service";

const ProfilePage = () => {
  const { currentUser, setCurrentUser } = useUser();
  const [message, setMessage] = useState("");
  const [rentsData, setRentsData] = useState([]);

  useEffect(() => {
    if (currentUser) {
      rental_service
        .getRentalByUserId(currentUser.user._id)
        .then((res) => {
          console.log(res.data);
          setRentsData(res.data);
        })
        .catch((err) => {
          console.log(err);
          if (err.response && err.response.status === 404)
            setMessage("找不到資料");
          else if (err.response && err.response.data)
            setMessage(err.response.data.message);
          else setMessage(err.message);
        });
    }
  }, []);

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
          </table>
          <div className="row">
            <h3>
              <strong>我出租的房屋</strong>
            </h3>
          </div>
          {message && (
            <div className="row">
              <div className="alert alert-danger">{message}</div>
            </div>
          )}
          <RentList rentsData={rentsData} />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
