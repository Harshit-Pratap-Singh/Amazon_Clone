import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format';

function Order({order}) {
    console.log(moment.unix(order.data.created).format('MMMM Do YYYY, h:mm:ss a'));
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mm:ss a')}</p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item =>(
                <CheckoutProduct 
                    key={item.id}
                    id={item.id}
                    price={item.price}
                    img={item.img}
                    title={item.title}
                    rating={item.rating}
                    hideButton={true}
                />
            ))}
            <CurrencyFormat 
                renderText={(value) =>
                    (<>
                    <h3 className='order__totle'>Order Total: {value}</h3>
                    </>)
                }
                decimalScale={2}
                value={order.data.amount/100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'₹'}
            />
        </div>
    )
}

export default Order
