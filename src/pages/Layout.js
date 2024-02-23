import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout(){
    return (
        <div>
            <NavBar titulo="Mi Tienda"/>
            <Outlet/>
            
        </div>
    )
}

export default Layout;