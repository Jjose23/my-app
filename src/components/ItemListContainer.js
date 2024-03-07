import "./ItemListContainer.css"
import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";
import { obtenerProducts } from "../asyncMock";

function ItemListContainer() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  
  // Define la categoría actual para mostrar en el texto
  const categoriaActual = categoria ? categoria.charAt(0).toUpperCase() + categoria.slice(1) : "All Products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await obtenerProducts();
        if (categoria) {
          // Filtra los productos por categoría
          const productosFiltrados = result.filter(
            (producto) => producto.category === categoria
          );
          setProductos(productosFiltrados);
        } else {
          setProductos(result);
        }
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchData();
  }, [categoria]);
    
  return (
    <main className="containerGeneral">
      <span className="fs-3">{categoriaActual}</span>
      <div className="prueba">
        {productos.map((producto) => (
          
          <div key={producto.id} className="card-container">
            <CardItem
              key={producto.id}
              image={producto.image}
              alt={producto.description}
              title={producto.title}
              price={producto.price + " USD"}
              id={producto.id}
            />
            
          </div>
        ))}
      </div>
    </main>
  );
}

export default ItemListContainer;
