import "./CardItem.css"

function CardItem({ image, alt, title, price, info, }) {

  return (
    <div className="card" >
      <img src={image} className="card-img-top" alt={alt} style={{ width: '13.9rem', height: '200px' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text">{info}</p>
      </div>
      
    </div>
  );
}

export default CardItem;
