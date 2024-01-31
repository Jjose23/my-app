import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"

function App(){
    return (
        <div>
            <header>
                <NavBar titulo="Mi Tienda"/>
            </header>
            <main>
                <ItemListContainer texto="Bienvenid@ a mi Tienda en Línea" />
            </main>
        </div>
    )
};

export default App;