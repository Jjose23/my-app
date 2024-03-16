
import { Link } from "react-router-dom";
import "./CardItem.css";
// Mi componente base para confeccionar cada card de producto pasando sus props

function CardItem({ image, alt, title, price, info, id, quantity, stock }) {
  
  const backButton = id === '/' ? "Go Back" : "More Details";// Parametros para hacer que el Boton cambie de nombre
  
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text">{info}{quantity}</p>
        <p className="card-text">{stock}</p>
        
        {/* Funcion para cambiar el comportamiento del boton*/}
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
