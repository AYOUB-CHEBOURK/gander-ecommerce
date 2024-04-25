import './product.css'
import { FaChevronDown } from "react-icons/fa6";
import { ProductServiceData } from '../../data/productServiceData';
import { ShopProductsData } from '../../data/shopData';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import { useState , useEffect } from 'react';


const Product2 = () =>{

    useEffect(() =>{
        window.scrollTo(0,0);
    }, []);



    const dispatch = useDispatch() // get and add product in shop cart
    const { id } = useParams(); // Get the product ID from the URL
    const [selectedColor, setSelectedColor] = useState(""); // Initialize selectedColor state
    const [quantity, setQuantity] = useState(1); // Initialize selectedQuantity state

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    // Find the selected product based on the ID
    const product = ShopProductsData.find((item) => item.id === parseInt(id));
    
    if (!product) {
    return <div>Product not not found.</div>; // Handle the case where the product is not found
    }


    return(
        <>
          <div className="product">
            <div className="container">
                <div className="cart">
                    <div className="image">
                    <img src={product.image} alt="" />
                    </div>
                    <div className="box">
                        <h1>{product.address}</h1>
                        <div className="price">
                            <h2>{product.reduction}</h2>
                            <h3>{product.price}</h3>
                        </div>
                        <p>Experience the power of sound with our curated selection of speakers for every occasion.</p>
                        <form action="">
                            <div className="drop">
                                <input list='select color'
                                    name='select color'
                                    placeholder='select color'
                                    className='select'
                                    required
                                    value={selectedColor} // Bind selectedColor to the input value
                                    onChange={handleColorChange} // Handle color change
                                />
                                <FaChevronDown className='icon-drop' />
                                <datalist id='select color' >
                                    <option value="Black">Black</option>
                                    <option value="White">White</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Red">Red</option>
                                </datalist>
                            </div>
                            <div className="caption">
                                <label>Quantity</label>
                                <input type="number"
                                    required
                                    value={quantity} // Bind quantity to the input value
                                    onChange={handleQuantityChange} // Handle quantity change
                                />
                               <input className='submit' type='submit' value='add To Cart' onClick={() => {
                                    if (selectedColor !== "") {
                                        dispatch(addToCart({
                                            id: product.id,           
                                            image: product.image,
                                            reduction: product.reduction,
                                            color: selectedColor,
                                            quantity: quantity,
                                        }));
                                    } else {
                                        // Handle the case where selectedColor is empty (e.g., show an error message)
                                        alert("Please select a color before adding to cart.");
                                    }
                                }}/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="service">
                    {ProductServiceData.map((item) =>(
                        <div className="card" key={item.id}>
                            <div className="image">
                              <img src={item.image} alt="image" />
                            </div>
                            <div className="caption">
                                <h1>{item.address}</h1>
                                <h2>{item.text}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </>
    )
}

export default Product2