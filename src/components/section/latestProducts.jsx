import './latestProducts.css'
import image13 from '../../assets/images/image13.jpg'
import image14 from '../../assets/images/image14.jpg'
import { Link } from 'react-router-dom'

const LatestProducts = () =>{
    return(
        <>
          <div className="latest-products">
            <div className="container">
                <h1>Latest Products</h1>
                <div className="boxes">
                    <div className="box1">
                        <span>15% DISCOUNT</span>
                        <h2>iPhone 14 pro max - Pearl White</h2>
                        <p>Stay ahead of the curve with our comprehensive coverage of mobile technology and its impact on our lives.</p>
                        <Link to="/shop"><button>Shop Now</button></Link>
                        <img src={image13} alt="" />
                    </div>
                    <div className="box2">
                        <img src={image14} alt="" />
                        <h2>iPhone 14 pro max Cover Pearl White</h2>
                        <p>Discover the world of smartphones and mobile technology with our expert insights and analysis.</p>
                        <div className="btn">
                        <Link to="/shop"><button>Shop Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default LatestProducts