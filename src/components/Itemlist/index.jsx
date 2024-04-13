import "./style.css";

export const Itemlist = ({ nameRep, description }) => {
  return (
    <div className="card-item">
      <h3>{nameRep}</h3>
      <p>{description}</p>
      <hr />
    </div>
  );
};
