import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import "./Cart.css"

// Acá uso las funciones que declaré en mi CartContext para confeccionar mi Carrito
const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return(
            <div className="CartContainerGeneral">
                <h1 className="textContainer">
                There are no items in the cart
                </h1>
                <Link to={'/'} className="btn btn-info">All Products</Link>
            </div>
        )
    }

    return (
        <div className="CartContainerGeneral">
            <div className="CartContainer">
            {cart.map(p=> <CartItem key={p.id} {...p}/>) }
            </div>
            <h3>Total:  {total} USD</h3>
            <button onClick={()=> clearCart()} className="btn btn-info">Clear Cart</button>
            <Link to={'/checkout'} className="btn btn-info">Checkout</Link>
        </div>
    )
}

export default Cart;