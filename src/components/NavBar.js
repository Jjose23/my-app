import CartWidget from "./CartWidget";



function NavBar({titulo}){
    return(
            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            <span class="display-3">Mi Tienda</span>
            <a href="#" class="text-decoration-none fs-5">Descuentos</a>
            <a href="#" class="text-decoration-none fs-5">Promociones</a>
            <a href="#" class="text-decoration-none fs-5">Nosotros</a>
            <CartWidget/>
            </div>
            </nav>  
        
        
    )
}





export default NavBar;