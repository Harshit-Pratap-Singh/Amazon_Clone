import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product(props) {
    const [{ basket },dispatch]=useStateValue();
    const addToCart=() =>{
        const id=Date.now();
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                key: id,
                id:id,
                title:props.title,
                price:props.price,
                img:props.img,
                rating:props.rating,

            }
        });
    };
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{props.title.length>80?props.title.slice(0,80)+'...':props.title}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{props.price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(parseInt(props.rating)).fill().map((val,index) => {return <p key={index}>⭐</p>})}                    
                </div>
            </div>
                    <img 
                    src={props.img}
                    alt=''
                    />
                    <button onClick={addToCart}>Add To Cart</button>
                
            
        </div>
    )
}

export default Product
