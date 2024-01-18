import React from 'react';

const Card = ({className, CardWrapper__title, CardWrapper__details, children}) => {
  return (
    <div className={className}>
        <h1 className="CardWrapperTitle">{CardWrapper__title ? CardWrapper__title : `Top 5 SaaS Businesses – August 2021`}</h1>
        <p className="CardWrapperDetails">{CardWrapper__details ? CardWrapper__details : `Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS`}</p>
        {children}
    </div>
  )
}

export default Card;
