import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";

function App(){
    return (
        <div>
            <header>
                <NavBar titulo="Mi Tienda"/>
            </header>
            <main>
                <ItemListContainer texto="Bienvenido a mi Tienda en Línea" />
            </main>
        </div>
    )
};

export default App;