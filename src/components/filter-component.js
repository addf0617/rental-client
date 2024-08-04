const FilterComponent = () => {
  return (
    <div className="fs-5">
      <section
        className="container my-3 pt-2 d-flex flex-column justify-content-center bg-secondary bg-opacity-10
 "
      >
        <div className="row align-items-center justify-content-center py-1">
          <div className="col-2 ">
            <strong>區域</strong>
          </div>
          <div className="col-6 ">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="District"
                id="DistrictRadio1"
                value=""
                defaultChecked
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
          <div className="col-6">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="typeRadio1"
                value=""
                defaultChecked
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
              />
              <label className="form-check-label" for="typeRadio2">
                分租套房
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="typeRadio3"
                value="分租套房"
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
              />
              <label className="form-check-label" for="typeRadio4">
                雅房
              </label>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center py-1">
          <div className="col-2">
            <strong>租金</strong>
          </div>
          <div className="col-6">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="rental"
                id="rentalRadio1"
                value=""
                defaultChecked
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
              />
              <label className="form-check-label" for="rentalRadio4">
                小於50000
              </label>
            </div>
          </div>
        </div>
        <div className="row col-4 justify-content-center mx-auto py-3">
          <button className="btn btn-primary">查詢</button>
        </div>
      </section>
    </div>
  );
};

export default FilterComponent;
