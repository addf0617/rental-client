import CardComponent from "./card-component";

const RentList = ({ rentsData }) => {
  return (
    <div className="container">
      {rentsData.map((rent) => {
        return <CardComponent key={rent._id} rentData={rent} />;
      })}
    </div>
  );
};

export default RentList;
