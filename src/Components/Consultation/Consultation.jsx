import React from 'react';
import "./Consultation.css";
import Button from "../CommonCompontents/Button";
const Consultation = () => {
  return (
    <div className='consultation__wapper'>
        <div className="container">
            <div className="consultation__main">
            <div className="consultation__left">
                <h1 className='consultation__left__content'>Book A Free Digital Marketing Consultation</h1>
            </div>
            <div className="consultation__right">
                <input type="email" className='consultation__right__content' placeholder='Your Email' />
                <Button btnstyle="consultation__btn">Book my free meeting</Button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Consultation;
