import React from 'react';
import "./Testimonial.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div className='Testimonial'>
        <div className="container">
            <div className="heading">
                <h3 className='heading__testimonial'>Our Testimonials</h3>
            </div>

            <div className="testimonial__main">
                <div className="testimonial__main__left"></div>
                <div className="testimonial__main__right">
                    <p className='testimonial__main__right__content'>Lunar Strategy helped us with our digital marketing for 4 months now and still helps us. Great service and highly recommended.
                    </p>

                    <div className="testimonial__main__right__two">
                        <div className="testimonial__text">
                        — Kimmo Hakonen - Skrum Master at DaGear AB
                        </div>
                        <div className="testimonial__icons">
                        <FaArrowLeft className='arrow__left' />
                        <FaArrowRight className='arrow__right' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial;