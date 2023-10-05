import './featuredProducts.css'
import {FeaturedProductsData} from'../../data/featuredProductsData'
import { Link } from 'react-router-dom'

const FeaturedProducts = () =>{
    return(
        <>
          <div className="featured-products">
            <div className="container">
                <h1>Featured Products</h1>
                <div className="cards">
                    <Link to='/shop'>
                      {FeaturedProductsData.map((item , id)=>(
                        <div className="card" key={id}>
                          <div className="image">
                            <img src={item.image} alt="" />
                          </div>
                          <h2>{item.address}</h2>
                          <div className="caption">
                            <h3>{item.reduction}</h3>
                            <h4>{item.price}</h4>
                          </div>
                        </div>
                      ))}
                    </Link>
                </div>
            </div>
          </div>

        </>
    )
}

export default FeaturedProducts