import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider';
import {db} from './firebase'
import Order from './Order.js';
import './Orders.css'

function Orders() {
    const [orders,setOrders]=useState([]);
    const [{basket,user},dispatch]=useStateValue();

    useEffect(() => {
        if(user){
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created','desc')
        .onSnapshot(snapshot => {
            console.log('snapshot>>>>>>>>', snapshot);
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data : doc.data()
            })))
        })
    }
    else{
        setOrders([]);
    }
    }, [user])
    return (
        <div className='orders'>
           <h1>Your Orders</h1>
           <div className='orders__order'>
               {orders.map(order => {
                   return <Order order={order}/>
               })}
           </div>
        </div>
    )
}

export default Orders
