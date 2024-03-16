import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import CardItem from "../CardItem/CardItem";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";

// Acá reutilizo mi componente CardItem y genero la logica para crear mi Card a detalle usando el id del producto(mostrando mas informacion 
// y agregando la funcionalidad de incrememtar o disminuir la cantidad del producto que se desea cargar en el carrito y boton de agregar al mismo)
function ItemDetail() {
  const { id } = useParams();
   
  const [producto, setProducto] = useState(null);
  const [quantity, setQuantity] = useState(1); 
  const { addItem } = useContext(CartContext);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  //Uso la funcion declarada en mi CartContext para el boton de agregar al carrito
  const addToCart = () => {
    addItem(producto, quantity);
    
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "MisProductos", id);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          const productoData = docSnap.data();
          setProducto({ id: docSnap.id, ...productoData });
        } else {
          console.error("No se encontró el producto con el ID:", id);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!producto) {
    return <div>Loading products...</div>;
  }

  const { image, title, alt, price, description, stock } = producto;

  return (
    <main className="containerGeneral">
      <div className="producto">
        <CardItem
          image={image}
          alt={alt}
          title={title}
          price={price + " USD"}
          info={description}
          stock={"Stock: " + stock}
          id={'/'}
        />
        
        <div className="quantity-buttons">
          <button className="btn-cant" onClick={decreaseQuantity}>
            <i className="bi bi-dash-circle-fill miBtn"></i>
          </button>
          <span className="quantity">{quantity}</span>
          <button className="btn-cant" onClick={increaseQuantity}>
            <i className="bi bi-plus-circle-fill miBtn"></i>
          </button>
        </div>
        <button onClick={addToCart} className="btn btn-info compra-cart">
          <i className="bi bi-cart-plus"></i>
        </button>
      </div>
    </main>
  );
}

export default ItemDetail;
