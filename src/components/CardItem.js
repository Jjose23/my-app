import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.css";

function CardItem({ image, alt, title, price, info, id }) {
  const backButton = id === '/' ? "Volver" : "More Details";

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text">{info}</p>
        {id === '/' ? (
          <button onClick={() => window.history.back()} className="btn btn-info">
            {backButton}
          </button>
        ) : (
          <Link to={`producto/${id}`} className="btn btn-info">
            {backButton}
          </Link>
        )}
      </div>
    </div>
  );
}

export default CardItem;
