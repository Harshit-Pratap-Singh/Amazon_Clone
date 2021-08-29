const functions = require("firebase-functions");
const express=require('express');
const cors=require('cors');
const stripe=require('stripe')('sk_test_51JRckuSBKLKNY9kIQWlehlvKv9IJ1RIrSxmZVav9Tr09xT454y8Jb4qg27uXRjqnkz33S6fhjIezVQEAlFUGYpRz00UH3xf4qM')

//api

//app config
const app=express();

//middleware
app.use(cors({origin: true}));
app.use(express.json());

//api route
app.get('/', (req,res) => {
    res.status(200).send('hello world');
});

app.post('/payments/create' , async (req,res) => {
   const total=req.query.total;
    console.log('payment amount recieved >>>>>' , total);
    const paymentIntent= await stripe.paymentIntents.create({
        amount : total,
        currency: 'inr'
    });

    res.status(201).send(
        clientSecret = paymentIntent.client_secret
    );

})
//listen command
exports.api =functions.https.onRequest(app);

// (http://localhost:5001/clone-bc171/us-central1/api)