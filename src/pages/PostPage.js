import React from "react";

const PostPage = () => {
  return (
    <div className="container-md my-3">
      <form action="" method="post">
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
            required
          />
        </div>
        <div className="row mb-3">
          <label htmlFor="DistrictInput" className="form-label">
            District
          </label>
          <select
            class="form-select"
            id="DistrictInput"
            name="District"
            aria-label="Default select example"
          >
            <option value="北區">北區</option>
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
            name="file"
            placeholder="請上傳圖片"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          刊登房屋
        </button>
      </form>
    </div>
  );
};

export default PostPage;
