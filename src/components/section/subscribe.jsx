import './subscribe.css'
import image21 from "../../assets/images/image21.png"
import { FaRegBell } from "react-icons/fa6";


const Subscribe = () =>{
    return(
        <>
          <div className="subscribe">
            <div className="container">
                <div className="text">
                    <h1>Subscribe to our newsletter!</h1>
                    <p>Get the freshest headlines and updates sent uninterrupted to your inbox.</p>
                    <button><FaRegBell className='icon'/>Subscribe</button>
                </div>
                <img src={image21} alt="" />
            </div>
          </div>
        </>
    )
}

export default Subscribe
