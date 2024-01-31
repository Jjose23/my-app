import CartWidget from "./CartWidget";



function NavBar({titulo}){
    return(
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <span className="display-3">Mi Tienda</span>
            <a href="#" className="text-decoration-none fs-5">Descuentos</a>
            <a href="#" className="text-decoration-none fs-5">Promociones</a>
            <a href="#" className="text-decoration-none fs-5">Nosotros</a>
            <CartWidget/>
            </div>
            </nav>  

        
    )
}





export default NavBar;