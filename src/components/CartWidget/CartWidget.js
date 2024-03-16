import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

//Componente para mostrar en mi Navbar mi icono de carrito y contador de productos cargados en él 
const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext);
    
    return (
        <div>
            <Link to={'/cart'} className="btn btn-info position-relative rounded-circle">
                <i className="bi bi-cart"></i>
            </Link>
            {totalQuantity > 0 && (
                <div className="position-absolute translate-middle badge rounded-pill bg-danger">{totalQuantity}</div>
            )}
        </div>
    );
}

export default CartWidget;
