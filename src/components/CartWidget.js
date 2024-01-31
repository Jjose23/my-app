
function CartWidget(){
    return(<button type="button" class="btn btn-success position-relative rounded-circle"><ion-icon size="small" name="cart-sharp"></ion-icon>

    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    3
    </span>
    </button>
    )
            
};

export default CartWidget;
