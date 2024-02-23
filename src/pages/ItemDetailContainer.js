import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { obtenerProducts } from "../asyncMock";
import CardItem from "../components/CardItem";
import "./ItemDetailContainer.css"


function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

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
      <CardItem
        image={image}
        alt={alt}
        title={title}
        price={price + " USD"}
        info={description}
      />
      <Link to="/" className="btn btn-info">
        Go Back
      </Link>
    </div>

    </main>
    
  );
}

export default ItemDetailContainer;
