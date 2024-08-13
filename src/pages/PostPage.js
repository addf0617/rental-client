import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../context/userContext";
import rental_service from "../services/rental_service";

const PostPage = () => {
  const [message, setMessage] = useState("");
  let [houseData, setHouseData] = useState({
    title: "",
    description: "",
    address: "",
    type: "獨立套房",
    District: "北區",
    price: 0,
    image: "",
  });
  const [buttonDisable, setButtonDisable] = useState(true);
  const { currentUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonDisable("disabled");
    let formData = new FormData();
    //遍歷houseData並將其轉為formData
    for (const [key, value] of Object.entries(houseData)) {
      formData.append(key, value);
    }
    rental_service
      .createRental(formData)
      .then((res) => {
        setButtonDisable("");
        setMessage("");
        window.alert("上傳成功");
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
        setButtonDisable("");
        if (err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else if (err.response.data) setMessage(err.response.data);
        else setMessage(err.message);
      });
  };

  const handleChangeTitle = (e) => {
    setHouseData({ ...houseData, title: e.target.value });
  };

  const handleChangeDescription = (e) => {
    setHouseData({ ...houseData, description: e.target.value });
  };

  const handleChangeAddress = (e) => {
    setHouseData({ ...houseData, address: e.target.value });
  };

  const handleChangeType = (e) => {
    setHouseData({ ...houseData, type: e.target.value });
  };

  const handleChangeDistrict = (e) => {
    setHouseData({ ...houseData, District: e.target.value });
  };

  const handleChangePrice = (e) => {
    setHouseData({ ...houseData, price: e.target.value });
  };

  const handleChangeImage = (e) => {
    let file = e.target.files[0];
    //雖然後端會檢查不過這裡也檢查一下
    if (
      file &&
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      file.type !== "image/jpg"
    ) {
      alert("請上傳jpg、jpeg、png格式的圖片");
      e.target.value = null;
      file = null;
      return;
    } else if (file && file.size > 2 * 1024 * 1024) {
      alert("圖片大小超過2MB");
      e.target.value = null;
      file = null;
      return;
    }
    setHouseData({ ...houseData, image: file });
  };

  return (
    <div className="container-md my-3">
      {!currentUser && (
        <div className="container">
          <div className="alert alert-danger">必須要先登入才能刊登房屋</div>
        </div>
      )}
      {message && <div className="alert alert-danger">{message}</div>}
      {currentUser && (
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="titleInput" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="titleInput"
              name="title"
              placeholder="請輸入標題"
              minLength={5}
              maxLength={20}
              onChange={handleChangeTitle}
              required
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="descriptionInput" className="form-label">
              description
            </label>
            <textarea
              className="form-control"
              id="descriptionInput"
              name="description"
              rows="3"
              placeholder="關於房屋的一些描述..."
              minLength={10}
              maxLength={200}
              onChange={handleChangeDescription}
              required
            ></textarea>
          </div>
          <div className="row mb-3">
            <label htmlFor="addressInput" className="form-label">
              address
            </label>
            <input
              type="text"
              className="form-control"
              id="addressInput"
              name="address"
              placeholder="請輸入詳細地址"
              minLength={5}
              maxLength={80}
              onChange={handleChangeAddress}
              required
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="typeInput" className="form-label">
              type
            </label>
            <select
              className="form-select"
              id="typeInput"
              name="type"
              aria-label="type selected"
              onChange={handleChangeType}
            >
              <option value="獨立套房" selected>
                獨立套房
              </option>
              <option value="分租套房">分租套房</option>
              <option value="雅房">雅房</option>
              <option value="整層住家">整層住家</option>
              <option value="整棟住家">整棟住家</option>
            </select>
          </div>
          <div className="row mb-3">
            <label htmlFor="DistrictInput" className="form-label">
              District
            </label>
            <select
              className="form-select"
              id="DistrictInput"
              name="District"
              aria-label="Default select example"
              onChange={handleChangeDistrict}
            >
              <option value="北區" selected>
                北區
              </option>
              <option value="中區">中區</option>
              <option value="南區">南區</option>
              <option value="東區">東區</option>
            </select>
          </div>
          <div className="row mb-3">
            <label htmlFor="priceInput" className="form-label">
              price
            </label>
            <input
              type="number"
              id="priceInput"
              name="price"
              className="form-control"
              min={0}
              max={9999999}
              placeholder="每月租金"
              onChange={handleChangePrice}
              required
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="fileInput" className="form-label">
              Image
            </label>
            <input
              className="form-control"
              type="file"
              id="fileInput"
              name="image"
              placeholder="請上傳圖片"
              onChange={handleChangeImage}
              required
            />
          </div>
          <button type="submit" className={`btn btn-primary ${buttonDisable}`}>
            刊登房屋
          </button>
        </form>
      )}
    </div>
  );
};

export default PostPage;
