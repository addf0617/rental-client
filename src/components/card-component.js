import React from "react";
import "../style/card.css";

const CardComponent = ({ rentData }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-sm-4 position-relative overflow-hidden">
          <img
            src={`http://localhost:8080/api/rental/image/${rentData._id}`}
            className="card-img fit-cover w-100 h-100"
            alt={rentData.title}
          />
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{rentData.title}</h5>
            <p className="card-text">
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#615fdd" }}
              ></i>
              地址：{rentData.address}
            </p>
            <span className="badge rounded-pill bg-primary">
              {rentData.District}
            </span>
          </div>
          <div className="card-footer text-muted">
            房東：{rentData.landlord.username}
            <i
              className="fa-solid fa-phone"
              style={{ paddingLeft: "10px" }}
            ></i>{" "}
            聯絡方式：
            {rentData.landlord.phoneNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
