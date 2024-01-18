import React from 'react'
import "./Menu.css";
import Logo from "../../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Menu = () => {
  return (
    <>
      <nav className='nav'>
        <div className="container">
            <div className="navWrapper">
                <div className="navWrapperLogo">
                  <picture>
                    <img src={Logo} alt={Logo} />
                  </picture>
                </div>
                <div className="navWrapperMenu">
                  <ul className='navMenu'>
                    <li className='navMenuList'><a href="#">Services</a></li>
                    <li className='navMenuList'><a href="#">Industries</a></li>
                    <li className='navMenuList'><a href="#">About Us</a></li>
                    <li className='navMenuList'><a href="#">Team Lunar</a></li>
                    <li className='navMenuList'>
                      <a href="#">Blog</a>
                      <MdKeyboardArrowDown className='DropIcon'/>
                    </li>
                  </ul>
                </div>
                <div className="navWrapperBtn">
                  <button>Contact Us</button>
                </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Menu;
