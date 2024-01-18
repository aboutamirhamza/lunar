import React from 'react';
import "./Footer.css";
import FooterLogo from "../../assets/footerLogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footerWrapper'>
        <div className="container">
            <div className="footer__main">
                <div className="footer__one">
                    <picture>
                        <img src={FooterLogo} alt={FooterLogo} className='footer__logo' />
                    </picture>
                    <p className='footer__one__details'>REBORN STUDIO AB
                    Org.nr: 559264-1871
                    Lunar Holding LDA
                    info@lunarstrategy.com
                    +467-20478390</p>
                    <div className="social__icon">
                        <FaFacebookF className='social__icon__Icon' />
                        <FaTwitter className='social__icon__Icon' />
                        <FaLinkedin className='social__icon__Icon' />
                        <FaInstagram className='social__icon__Icon' />
                    </div>
                </div>
                <div className="footer__two">
                    <h3 className='footer__heading'>
                    Company
                    </h3>
                    <ul className='footer__unorderList'>
                        <li className='footer__list'><a href="#">Home</a></li>
                        <li className='footer__list'><a href="#">About Us</a></li>
                        <li className='footer__list'><a href="#">Lunar Blog</a></li>
                        <li className='footer__list'><a href="#">Our Specialists</a></li>
                        <li className='footer__list'><a href="#">Contact Us</a></li>
                        <li className='footer__list'><a href="#">Privacy & Policy</a></li>
                    </ul>
                </div>
                <div className="footer__three">
                <h3 className='footer__heading'>
                Services
                    </h3>
                    <ul className='footer__unorderList'>
                        <li className='footer__list'><a href="#">Digital Marketing</a></li>
                        <li className='footer__list'><a href="#">Free Audit</a></li>
                        <li className='footer__list'><a href="#">Google Ads</a></li>
                        <li className='footer__list'><a href="#">Cryptocurrency Marketing</a></li>
                        <li className='footer__list'><a href="#">SEO </a></li>
                        <li className='footer__list'><a href="#">SAAS Marketing</a></li>
                        <li className='footer__list'><a href="#">Website & SEO</a></li>
                    </ul>
                </div>
                <div className="footer__four">
                <h3 className='footer__heading'>
                Podcast
                    </h3>
                    <div className="footer__podcast__box"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;