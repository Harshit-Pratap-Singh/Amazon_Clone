import React from 'react'
import { forwardRef } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct=forwardRef(({id,price,img,rating,title,hideButton},ref) => {
    const [,dispatch]=useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type:'REMOVE_FORM_BASKET',
            id:id,
        });
    };
    return (
       
        <div ref={ref} className='checkoutProduct' >
            <img className='checkoutProduct__image' src={img} alt=''/>
        <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>
            {title}
        </p>
        <p className='checkoutProduct__price'>
            <small>
            ₹
            </small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
        {Array(rating).fill().map((val,index) => {return <p key={index}>⭐</p>})}
        </div>
        {!hideButton && <button className='checkoutProduct__button'
       onClick={removeFromBasket}
       >Remove From Basket</button>}
       
            
        </div>
        </div>
        
    )
})

export default CheckoutProduct
