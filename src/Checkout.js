import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal.js';
import FlipMove from "react-flip-move";
import keygen from 'keygenerator';

function Checkout() {
    const [{basket,user}]=useStateValue();
    const allItems=basket.map(({id,title,price,rating,img,key}) => {
        return (
        <CheckoutProduct 
        key={key}
        id={id}
        price={price}
        title={title}
        rating={rating}
        img={img}
    />
    );
    });
    return (
        <div className='checkout'>
        
            <div className='checkout__left'>
            <img 
            className='checkout__ad'
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt='ad'
            />
            <div >
                <h3>Hello, {user?.email}</h3>
                <h1 className='checkout__title'>
                    Your Shopping Basket
                </h1>
            </div>
            <div >
                <FlipMove  
                easing='ease-in-out'
                staggerDurationBy="0"
                enterAnimation='none'
                leaveAnimation='accordionVertical'
            duration={300}
           >
             {allItems}  
            </FlipMove>
            </div>
            </div>

            <div className='checkout__right'>
            <Subtotal />
            </div>
        </div>
    )
}

export default Checkout


