
function CartWidget(){
    return(<button type="button" className="btn btn-info position-relative rounded-circle"><i className="bi bi-cart"></i>

    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    3
    </span>
    </button>
    )
            
};

export default CartWidget;
