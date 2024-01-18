import React from 'react';
import "./Why.css";
import Button from "../CommonCompontents/Button";
import WhyRight from "../../assets/whyright.png";
import { MdKeyboardArrowRight } from "react-icons/md";
const Why = () => {
  return (
    <div className='Why'>
        <div className="container">
            <div className="why__main">
                <div className="why__main__left">
                    <h3 className='why__title'>Why Lunar Strategy?</h3>
                    <p className='why__details'>To get customers, it's imperative to be seen by the mass. Every successful company is unique and needs contrasting digital marketing strategies. Book a meeting with us and we will help you find the correct strategy for your company.</p>
                    <Button btnstyle="whyBtnMain">
                        Book Free Meeting
                        <MdKeyboardArrowRight className='whyBtn' />
                        </Button>
                </div>
                <div className="why__main__right">
                    <picture>
                        <img src={WhyRight} alt={WhyRight} className='whyImg' />
                    </picture>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why;
