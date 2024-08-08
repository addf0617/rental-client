import { useState } from "react";

const FilterComponent = ({ filter, setFilter }) => {
  const [District, setDistrict] = useState("");
  const [type, setType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handlePriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    //判斷條件是否存在，在合併成搜尋
    const cleanFilter = { District, type, maxPrice };
    //如果值為空，則將該屬性刪除，注意這樣原物件會被改變
    Object.keys(cleanFilter).forEach(
      (k) => cleanFilter[k] === "" && delete cleanFilter[k]
    );
    setFilter(cleanFilter);
  };

  return (
    <div className="fs-6">
      <section
        className="container my-3 pt-2 d-flex flex-column justify-content-center bg-secondary bg-opacity-10
 "
      >
        <div className="row align-items-center justify-content-center py-1">
          <div className="col-2 ">
            <strong>區域</strong>
          </div>
          <div className="col-6 " onChange={handleDistrictChange}>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="District"
                id="DistrictRadio1"
                value=""
                checked={District === ""}
              />
              <label className="form-check-label" for="DistrictRadio1">
                不限
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="District"
                id="DistrictRadio2"
                value="北區"
                checked={District === "北區"}
              />
              <label className="form-check-label" for="DistrictRadio2">
                北區
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="District"
                id="DistrictRadio3"
                value="中區"
                checked={District === "中區"}
              />
              <label className="form-check-label" for="DistrictRadio3">
                中區
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="District"
                id="DistrictRadio4"
                value="南區"
                checked={District === "南區"}
              />
              <label className="form-check-label" for="DistrictRadio4">
                南區
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="District"
                id="DistrictRadio5"
                value="東區"
                checked={District === "東區"}
              />
              <label className="form-check-label" for="DistrictRadio5">
                東區
              </label>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center py-1">
          <div className="col-2">
            <strong>房型</strong>
          </div>
          <div className="col-6" onChange={handleTypeChange}>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="typeRadio1"
                value=""
                checked={type === ""}
              />
              <label className="form-check-label" for="typeRadio1">
                不限
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="typeRadio2"
                value="獨立套房"
                checked={type === "獨立套房"}
              />
              <label className="form-check-label" for="typeRadio2">
                獨立套房
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="typeRadio3"
                value="分租套房"
                checked={type === "分租套房"}
              />
              <label className="form-check-label" for="typeRadio3">
                分租套房
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="typeRadio4"
                value="雅房"
                checked={type === "雅房"}
              />
              <label className="form-check-label" for="typeRadio4">
                雅房
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="typeRadio5"
                value="整層住家"
                checked={type === "整層住家"}
              />
              <label className="form-check-label" for="typeRadio5">
                整層住家
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="typeRadio6"
                value="整棟住家"
                checked={type === "整棟住家"}
              />
              <label className="form-check-label" for="typeRadio6">
                整棟住家
              </label>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center py-1">
          <div className="col-2">
            <strong>租金</strong>
          </div>
          <div className="col-6" onChange={handlePriceChange}>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="rental"
                id="rentalRadio1"
                value=""
                checked={maxPrice === ""}
              />
              <label className="form-check-label" for="rentalRadio1">
                不限
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="rental"
                id="rentalRadio2"
                value="10000"
                checked={maxPrice === "10000"}
              />
              <label className="form-check-label" for="rentalRadio2">
                小於10000
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="rental"
                id="rentalRadio3"
                value="20000"
                checked={maxPrice === "20000"}
              />
              <label className="form-check-label" for="rentalRadio3">
                小於20000
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="rental"
                id="rentalRadio4"
                value="50000"
                checked={maxPrice === "50000"}
              />
              <label className="form-check-label" for="rentalRadio4">
                小於50000
              </label>
            </div>
          </div>
        </div>
        <div className="row col-4 justify-content-center mx-auto py-3">
          <button className="btn btn-primary" onClick={handleSearch}>
            查詢
          </button>
        </div>
      </section>
    </div>
  );
};

export default FilterComponent;
