import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal.js';

function Checkout() {
    const [{basket,user}]=useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
            <img 
            className='checkout__ad'
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt='ad'
            />
            <div>
                <h3>Hello, {user?.email}</h3>
                <h1 className='checkout__title'>
                    Your Shopping Basket
                </h1>
            </div>
           { basket.map(({id,title,price,rating,img},index) => {
                return (<CheckoutProduct 
                key={index}
                id={id}
            price={price}
                title={title}
                rating={rating}
                img={img}
            />);
            })}
            </div>
            <div className='checkout__right'>
            <Subtotal />
            </div>
        </div>
    )
}

export default Checkout


