import './shopCart.css'
import { FaCartShopping } from "react-icons/fa6";
import { removeFromCart } from '../../redux/cartReducer';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from "react-icons/fa6";

const ShopCart = () =>{
    const dispatch = useDispatch()
    const products = useSelector( state=>state.cart.products )

    return(
        <>
            <button className='icon-shopping' style={{background: 'none', border: 'none'}}>
                <nav className="navbar">
                    <button className="icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <FaCartShopping/><span>{products.length}</span>
                    </button>
                    <div className="offcanvas offcanvas-end " id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Shop Cart</h5>
                            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <ul>
                            {products.map(product => (
                                <li key={product.id}>
                                    <img src={product.image} alt="img" />
                                    <div className="caption">
                                        <h1>{product.reduction}</h1>
                                        <h1>Color: {product.color}</h1>
                                        <h1>Quantity: {product.quantity}</h1>
                                    </div>
                                    <div className='remove' 
                                        onClick={()=>dispatch(removeFromCart({
                                         id: product.id,
                                        }))}>
                                        <FaTrash/>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </button>
        </>
    )
}

export default ShopCart