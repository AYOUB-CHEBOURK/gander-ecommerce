import './shop.css'
import {FeaturedProductsData} from'../../data/featuredProductsData'
import { ShopProductsData } from '../../data/shopData'
import { FaAngleLeft , FaAngleRight , FaHeart} from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import  { useRef } from 'react';


const Shop = () =>{

    return(
        <>
          <div className="shop">
            <div className="container">
                <h1>Shop</h1>
                <div id="carouselExampleIndicators" className="carousel slide installation">
                    <div className="carousel-indicators button ">
                        <button style={{backgroundColor: "white", border: "2px solid var(--main-color)" , height: "20px", width: "20px",}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"><FaAngleLeft/></button>
                        <button style={{backgroundColor: "white", border: "2px solid var(--main-color)" , height: "20px", width: "20px"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"><FaAngleRight/></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="cards">
                                {FeaturedProductsData.map((item)=>(
                                    <Link to={`/shop1/${item.id}`} key={item.id}>
                                        <div className="card">
                                        <div className="image">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <FaHeart className='icon-heart'/>
                                        <h2>{item.address}</h2>
                                        <div className="caption">
                                            <h3>{item.reduction}</h3>
                                            <h4>{item.price}</h4>
                                        </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="carousel-item product2">
                            <div className="cards">
                                    {ShopProductsData.map((item)=>(
                                      <Link to={`/shop2/${item.id}`} key={item.id}>
                                        <div className="card" key={item.id}>
                                            <div className="image">
                                                <img src={item.image} alt="" />
                                            </div>
                                                <FaHeart className='icon-heart'/>
                                            <h2>{item.address}</h2>
                                            <div className="caption">
                                                <h3>{item.reduction}</h3>
                                                <h4>{item.price}</h4>
                                            </div>
                                            </div>
                                       </Link>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Shop