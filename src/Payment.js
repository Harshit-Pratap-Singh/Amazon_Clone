import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import axios from './axios'
import {db} from './firebase'

function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    const stripe=useStripe();
    const elements=useElements();
    const history=useHistory();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');

    const [error,setError]=useState(null);
    const [disable, setDisable] = useState(true)
    const [clientSecret, setClientSecret] = useState(true);

    var total=0;
    basket.forEach(({price}) => total+=price);

    useEffect( ()=> {
        const getClientSecret = async () =>{
            const response=await axios({
                method : 'post',
                url: `/payments/create?total=${total * 100}`
            });
        setClientSecret(response.data,clientSecret);    

        }
        getClientSecret();

    }, [basket])

    const handleSubmit=async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{
            //paymentInetent = payment comfirmation
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket : basket,
                amount : paymentIntent.amount,
                created : paymentIntent.created
            });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type :'EMPTY_BASKET'
            });

            history.replace('/orders')
        })
    }

    const handleChange=e => {
        console.log(e.empty);
        setDisable(e.error);
        setError(e.error? e.error.message : '');
    }

    var total=0;
    basket.forEach(({price}) => total+=price);
    

    return (
        <div className='payment'>
        
        <div className="payment__container">
        <h1>
            Checkout (<Link to='/checkout'>{basket?.length} items</Link>
            )
         </h1>   
            <div className="payment__section">
            <div className="payment__title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
                <p>{user?.email}</p>
                <p>asdassdfdfd</p>
                <p>adsfasdfdfasfd</p>

            </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map(item =>{
                       return <CheckoutProduct
                        id={item.id}
                        price={item.price}
                        rating={item.rating}
                        title={item.title}
                        img={item.img}
                        />
                    })}
                </div>
            </div>
                <div className="payment__section">
                <div className="payment__title">
                <h3>Payment Method</h3>
                </div>
                <div className="payment__detail">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} className='payment__cardInput'/>
                        <div className="payment__priceContainer">
                        <CurrencyFormat 
                            renderText={(value) =>
                                (<>
                                    <h3>Order Total : {value}</h3>
                                </>)
                            }
                            decimalScale={2}
                            value={total}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={'₹'}
                         />
                         <button className='payment__buyNow' 
                         disabled={processing || disable || succeeded }>
                             <span>{processing ? <p>Processing</p> : 'Buy Now' }</span>
                         </button>
                        </div>
                        {error && <div>error</div>}
                    </form>
                </div>
                </div>
        </div>
            
        </div>
    )
}

export default Payment
