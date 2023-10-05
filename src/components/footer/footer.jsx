import './footer.css'
import logo from '../../assets/images/logo.svg'
import { FaFacebook , FaInstagram , FaWhatsapp} from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <>
          <div className="footer">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <p>Airspeed also makes seas may gather sea where fish saying brought fill one creeping replenish whales form that us one deep beginning.</p>
                </div>
                <div className="page">
                    <h1>Page</h1>
                    <nav>
                        <ul>
                        <li><Link to='/' className='active'>Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="contacts">
                    <h1>Contact</h1>
                    <h2>Info@example.com</h2>
                    <h2>+79 2589 63598</h2>
                    <h2>544 Honey Creek Rd. West</h2>
                    <h2>Des Moines, IA 50265</h2>
                    <div className="icon">
                        <ul>
                            <li><a href=''><FaFacebook/></a></li>
                            <li><a href=''><FaInstagram/></a></li>
                            <li><a href=''><FaWhatsapp/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Footer