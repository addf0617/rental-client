import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useUser } from "../context/userContext";
import rental_service from "../services/rental_service";

const HousePage = (props) => {
  const [houseData, setHouseData] = useState([]);
  const [message, setMessage] = useState("");
  const { currentUser } = useUser();
  let { id } = useParams();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (currentUser && currentUser.user._id === houseData.landlord._id) {
      rental_service
        .deleteRental(houseData._id)
        .then((res) => {
          window.alert("刪除成功");
          navigate("/profile");
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data && err.response.data.message) {
            setMessage(err.response.data.message);
          } else if (err.response.data) setMessage(err.response.data);
          else setMessage(err.message);
        });
    } else {
      alert("您沒有權限");
      return;
    }
  };

  useEffect(() => {
    rental_service
      .getRentalById(id)
      .then((res) => {
        setHouseData(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 404)
          setMessage("找不到資料");
        //如果用戶在網址後隨便輸入，如/asgjojs，會進入到房屋畫面，但後端會發送訊息"錯誤id"並給出400狀態碼
        //不太好的做法，應該要可以進入notfoundpage，但這本質上還是房屋畫面
        else if (err.response && err.response.status === 400) {
          setMessage("找不到資料");
        } else if (err.response && err.response.data)
          setMessage(err.response.data.message);
        else setMessage(err.message);
      });
  }, []);

  return (
    <div className="container mt-4">
      {message && <div className="alert alert-danger">{message}</div>}
      {houseData._id && (
        <div className="row">
          {/* 左側房屋資訊 */}
          <div className="col-md-8">
            <div className="card mb-3 position-relative">
              <img
                src={rental_service.getImgURL(id)}
                className="card-img-top  "
                alt={houseData.title}
              />
              <div className="card-body">
                <h2 className="card-title">
                  <strong>{houseData.title}</strong>
                </h2>
                <div className="span-container">
                  <span class="badge rounded-pill bg-primary me-2 fs-6">
                    {houseData.type}
                  </span>
                  <span class="badge rounded-pill bg-secondary me-2 fs-6">
                    {houseData.District}
                  </span>
                </div>

                <h4 className="my-3" style={{ color: "#E71218" }}>
                  <strong>{houseData.price}/月</strong>
                </h4>

                <p className="card-text">{houseData.description}</p>
                <p className="card-text">
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "#615fdd" }}
                  ></i>
                  地址：{houseData.address}
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                {currentUser &&
                  houseData.landlord?._id === currentUser.user._id && (
                    <button className="btn btn-danger" onClick={handleClick}>
                      刪除這筆資料
                    </button>
                  )}
              </div>
            </div>
          </div>

          {/* 右側房東資訊 */}
          <div className="col-md-4">
            <div className="card sticky-top">
              <div className="card-body">
                <h3 className="card-title">房東資訊</h3>
                <p className="card-text">
                  刊登人：{houseData.landlord?.username}
                </p>
                <p className="card-text">
                  <i className="fa-solid fa-phone"></i>
                  聯絡方式：{houseData.landlord?.phoneNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HousePage;
