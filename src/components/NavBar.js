import { Link } from "react-router-dom";
import CardtWidget from "./CardWidget";




function NavBar({titulo}){
    return(
        <header>
             <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <Link to="/" className="display-3 text-dark text-decoration-none">{titulo}</Link>
            <Link to="categoria/electronics" className="text-decoration-none fs-5">Electronics</Link>
            <Link to="categoria/jewelery" className="text-decoration-none fs-5">Jewelery</Link>
            <Link to="categoria/men's clothing" className="text-decoration-none fs-5">Clothing</Link>
            <CardtWidget/>
            
            </div>
            </nav>  

        </header>
           

        
    )
}





export default NavBar;