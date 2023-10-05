import './bannerCategory.css'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import image5 from '../../assets/images/image5.png'
import image6 from '../../assets/images/image6.png'
import { Link } from 'react-router-dom'

const bannerCategory = () =>{
    return(
        <>
           <div className="banner-category">
            <div className="container">
                <div className="box1">
                    <div className="caption">
                        <span>SPEAKER</span>
                        <h1>High Bluetooth Voice Wireless Speakers</h1>
                        <h2>30% Off</h2>
                        <Link to="/shop"><button>Shop Now</button></Link>
                    </div>
                    <img src={image3} alt="imageeeeee" />
                </div>
                <div className="box2">
                    <div className="caption">
                        <span>SPEED CHARGER</span>
                        <h1>Fast Charging Adapter</h1>
                        <Link to="/shop"><button>Shop Now</button></Link>
                    </div>
                    <img src={image4} alt="imageeeeee" />
                </div>
                <div className="box3">
                    <img src={image5} alt="imageeeeee" />
                    <div className="caption">
                        <span>EARBUDS</span>
                        <h1>High Latency 40ms Gaming Buds</h1>
                        <Link to="/shop"><button>Shop Now</button></Link>
                    </div>
                </div>
                <div className="box4">
                    <div className="caption">
                        <span>HEADPHONE</span>
                        <h1>High Quality Bluetooth Wireless Headphones</h1>
                        <h2>25% Off</h2>
                        <Link to="/shop"><button>Shop Now</button></Link>
                    </div>
                    <img src={image6} alt="imageeeeee" />
                </div>
            </div>
           </div>
        </>
    )
}

export default bannerCategory