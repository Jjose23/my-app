import { createContext, useState, useEffect } from "react";

// Acá está toda la logica del carrito y gestion centralizada en toda la app mediante el CartProvider
export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    // Calcula totalQuantity y total cuando cambia el carrito
    useEffect(() => {
        const newTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
        const newTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        
        setTotalQuantity(newTotalQuantity);
        setTotal(newTotal);
    }, [cart]);

    const addItem = (producto, quantity) => {
        if (!isInCart(producto.id)) {
            setCart(prev => [...prev, {...producto, quantity}]);
        } else {
            console.error('El producto ya fue agregado');
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdate);
    }

    const clearCart = () => {
        setCart([]);
    }
    
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }

    return (
        <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
