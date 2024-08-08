import CardComponent from "./card-component";

const RentList = ({ rentsData }) => {
  return (
    <div className="container-fluid d-flex flex-wrap justify-content-center">
      {rentsData.map((rent) => {
        return <CardComponent key={rent._id} rentData={rent} />;
      })}
    </div>
  );
};

export default RentList;
