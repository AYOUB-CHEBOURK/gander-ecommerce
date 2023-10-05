import './navBar.css'
import logo from "../../assets/images/logo.svg"
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import { FaSistrix } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import ShopCart from './shopCart';

const NavBar = () =>{
    const[responsive , setResponsive] = useState(false)

    return(
        <>
           <div className="nav-bar">
              <div className="container">
                <div className="item">
                    <div className="logo">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>
                    <form action="">
                        <input type="search" name="search" placeholder="Search here..." />
                        <div className="icon">
                          <FaSistrix/>
                        </div>
                    </form>           
                </div>
                <div className="text">
                    <div className={responsive ? "hideMenu" : "nav"}>
                        <nav>
                            <ul className='ul'>
                                <li><Link to='/' className='active' onClick={()=>{setResponsive(!responsive)}}>Home</Link></li>
                                <li><Link to='/shop' onClick={()=>{setResponsive(!responsive)}}>Shop</Link></li>
                                <li><Link to='/blog' onClick={()=>{setResponsive(!responsive)}}>Blog</Link></li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Page
                                    </a>
                                    <ul className="dropdown-menu" onClick={()=>{setResponsive(!responsive)}}>
                                        <li><Link className="dropdown-item" to="/">Home</Link></li>
                                        <li><Link className="dropdown-item" to="/about">About</Link></li>
                                        <li><Link className="dropdown-item" to="/shop">Shop</Link></li>
                                        <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                                        <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <ShopCart/>
                    <button className='toggle' onClick={()=>{setResponsive(!responsive)}}>
                      <FaBars/>
                    </button>
                </div>
              </div>
           </div>
        </>
    )
}

export default NavBar


// tabindex="-1"