
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemList";


function App(){
    return (
        
            <BrowserRouter>
                
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="categoria/:categoria?" element={<ItemListContainer />} />
                        <Route path={`producto/:id`} element={<ItemDetailContainer />} />
                        <Route path="categoria/:categoria/producto/:id" element={<ItemDetailContainer/>} />
                    
                    <Route path="*" element={<h1>Pagina no encontrada</h1>}/>
                    </Route>
                    
                    
                </Routes>
                
                
                
            </BrowserRouter>
           
    )
};

export default App;