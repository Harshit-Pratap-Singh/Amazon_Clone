import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const [{basket,user}]=useStateValue();
    const history=useHistory();
    var total=0;
    basket.forEach(({price}) => total+=price);
    const handleClick=() =>{
        // if(user) history.push('/payment');
        // else {
        //     alert("Please login to proceed");
        //     history.push('/login');
        // }
        history.push('/payment');
    }
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) =>
                    (<>
                    <p>
                    Subtotal ({basket.length} items):<strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' /> This order contains a gift
                    </small>
                    </>)
                }
                decimalScale={2}
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'₹'}
            />
            <button onClick={handleClick}>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal
