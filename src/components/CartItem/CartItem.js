import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

//Componente usado para mostrar cada producto individual en el carrito
const CartItem = ({ image, alt, title, price, quantity, id }) => {

    const { removeItem} = useContext(CartContext);
    const removButton = () => removeItem(id); // Asigno la funcion removeItem declarada en mi componente CartContext al boton para remover el producto individual de mi carrito

    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={alt} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price} USD</p>
                <p className="card-text">Stock: {quantity}</p>
                <button className="btn btn-info" onClick={removButton}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
