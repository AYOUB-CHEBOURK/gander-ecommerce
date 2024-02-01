import './hero.css'
import image1 from '../../assets/images/image1.png'
import { Link } from 'react-router-dom'

const Hero = () =>{
    return(
        <>
           <div className="hero container">
                <div id="carouselExampleIndicators" className="carousel slide installation">
                    <div className="carousel-indicators button">
                        <button style={{backgroundColor: "black", height: "15px", width: "15px"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button style={{backgroundColor: "black", height: "15px", width: "15px"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="box">
                                <div className="text">
                                    <h1>The ultimate <span>smart watch</span> destination</h1>
                                    <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do prevailed.</p>
                                    <div className="caption">
                                        <Link to="/shop"> <button>Purchase</button></Link>
                                        <h2>$599.00 USD</h2>
                                    </div>
                                </div>
                                <img src={image1} alt="" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="box2">
                               <div className="text">
                                  <h1>Premium tech gadgets and accessories.</h1>
                                  <p>Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help some door if in.</p>
                               </div>
                            </div>
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button> */}
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero