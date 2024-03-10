import React, { useState, useEffect } from "react";
import {  useParams   } from "react-router-dom";
import { obtenerProducts } from "../../asyncMock";
import CardContext from "../CardContext/CardContext";
import "./ItemDetail.css"


function ItemDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    // Aquí puedes implementar la lógica para agregar al carrito
    console.log(`Agregado al carrito: ${quantity} ${title}(s)`);
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productos = await obtenerProducts();
        const productoEncontrado = productos.find(
          (producto) => producto.id === parseInt(id)
        );
        setProducto(productoEncontrado);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!producto) {
    
    return <div>Loading products...</div>;
  }

  const { image, title, alt, price, description } = producto;
  


  return (
    
    <main className="containerGeneral">
      <div className="producto">
      <CardContext
        image={image}
        alt={alt}
        title={title}
        price={price + " USD"}
        info={description}
        id={'/'}
        
      />
      <div className="quantity-buttons">
          <button className="compra" onClick={decreaseQuantity} >
          <i className="bi bi-dash-circle-fill miBtn"></i>
          </button>
          <span className="quantity">{quantity}</span>
          <button className="compra" onClick={increaseQuantity} >
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
