import React, { useState, useEffect } from "react";
import CardItem from "../CardItem/CardItem";
import { useParams } from "react-router-dom";
import { getDocs, query, where, collection } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import "./ItemList.css"

// Acá genero el listado de mis productos y tambien filtro por categorias

function ItemList() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const categoriaActual = categoria ? categoria.charAt(0).toUpperCase() + categoria.slice(1) : "All Products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Crea la referencia a la colección de productos en Firestore
        const productsCollection = collection(db, "MisProductos");

        // Crea la consulta para filtrar por categoría
        const q = categoria ? query(productsCollection, where("category", "==", categoria)) : productsCollection;

        // Obtiene los documentos de la colección
        const querySnapshot = await getDocs(q);

        // Mapea los documentos a un array de productos
        const productsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        // Actualiza el estado con los productos obtenidos
        setProductos(productsArray);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchData();
  }, [categoria]);

  return (
    <main className="containerGeneral">
      <span className="fs-3">{categoriaActual}</span>
      <div className="Subcontainer">
        {productos.map((producto) => (
          <div key={producto.id} className="card-container">
            <CardItem
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

export default ItemList;
