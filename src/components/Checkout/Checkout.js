import { useContext, useState } from "react";
import { db } from "../../services/firebase/firebaseConfig";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartItem from "../CartItem/CartItem";
import "./Checkout.css"

// Acá se encuentra toda la logica para comprobar mi Stock(actualizar la cantidad de productos), evitar crear ordenes con productos agotados,
//tomar los datos del comprador y generar la orden en mi base de datos con un ID y datos importantes  
const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
   
    const [outOfStockItems, setOutOfStockItems] = useState([]);
    const { cart, total, clearCart, removeItem } = useContext(CartContext); 

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                item: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsAddedFromFirestore = await getDocs(query(collection(db, 'MisProductos'), where(documentId(), 'in', ids)));

            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const productQuantity = productAddedToCart?.quantity;

                if (stockDb >= productQuantity) {
                    batch.update(doc.ref, { stock: stockDb - productQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                const outOfStockItems = outOfStock.map((product) => (
                    
                    <CartItem
                        key={product.id}
                        image={product.image}
                        alt={product.alt}
                        title={product.title}
                        price={product.price}
                        quantity={product.stock}
                        id={product.id}
                        removButton={removeItem}
                    />
                ));
                
                setOutOfStockItems(outOfStockItems);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="textContainer">
                <h1>Your order is being generated...</h1>
                </div>
    }

    if (orderId) {
        return <div className="textContainer">
           <h1>Your order id is: {orderId}</h1>
           <h3>thank you for choosing us </h3>
        </div>
    }

    return (
        <div className="FormContainer">
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
            
            {outOfStockItems.length > 0 && (
                <div className="outStock">
                    <p>Out of stock:</p>
                    {outOfStockItems}
                </div>
            )}
        </div>
    );
};

export default Checkout;
