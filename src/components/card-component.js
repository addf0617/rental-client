import React from "react";

const CardComponent = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://picsum.photos/100/50"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">區域：</p>
        <p className="card-text">價格：</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
