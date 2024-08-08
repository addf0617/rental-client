import React from "react";

const CardComponent = ({ rentData }) => {
  return (
    <div className="card mb-3 mx-1" style={{}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`http://localhost:8080/api/rental/image/${rentData._id}`}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">
              <strong>{rentData.title}</strong>
            </h3>
            <p className="card-text">{rentData.description}</p>
            <p className="card-text">{rentData.District}</p>
            <p className="card-text">
              <small className="text-muted">價格：{rentData.price}</small>
            </p>
            <button className="btn btn-primary">詳情</button>
          </div>
        </div>
      </div>
      {/* <div className="card mx-1" style={{ width: "18rem", height: "30rem" }}>
      <img
        src={`http://localhost:8080/api/rental/image/${rentData._id}`}
        className="card-img-top"
        style={{ width: "18rem", height: "15rem" }}
        alt={rentData.title}
      />
      <div className="card-body">
        <h5 className="card-title">
          <strong>{rentData.title}</strong>
        </h5>
        <p className="card-text">地址：{rentData.address}</p>
        <p className="card-text">價格：{rentData.price}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div> */}
    </div>
  );
};

export default CardComponent;
