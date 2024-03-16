import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout(){
    return (
        <div>
            <NavBar titulo="My Store"/>
            <Outlet/>
            
        </div>
    )
}

export default Layout;