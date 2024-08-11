import { useState, useEffect } from "react";

import RentalService from "../services/rental_service";

import FilterComponent from "../components/filter-component";
import RentList from "../components/rentList-component";

const Homepage = () => {
  const [message, setMessage] = useState("");
  const [rentsData, setRentsData] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    setMessage("");
    setRentsData([]);
    RentalService.getRentals(filter)
      .then((res) => {
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
  }, [filter]);

  return (
    <div className="container">
      <FilterComponent setFilter={setFilter} filter={filter} />
      {message && (
        <div className="container">
          <div className="alert alert-danger">{message}</div>
        </div>
      )}
      <RentList rentsData={rentsData} />
    </div>
  );
};

export default Homepage;
