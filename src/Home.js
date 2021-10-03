import React from 'react'
import './Home.css';
import Product from './Product.js';
import { items } from './resource/items';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt='asa'
        />
        {/* <div className='home__row'>
         
          <Product
            id='2'

            title='SAMSUNG Galaxy A31 (Prism Crush White, 128 GB)  (6 GB RAM)'
            img='https://rukminim1.flixcart.com/image/416/416/kamtsi80/mobile/4/a/6/samsung-galaxy-a31-sm-a315fzwwins-original-imafs5p5y3gf4cej.jpeg?q=70'
            price={23999}
            rating={4.5}
          />

        </div>
        <div className='home__row'>
        <Product
            id='1'
            title='the code book'
            img='https://images-eu.ssl-images-amazon.com/images/I/51CC3yLf5mL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
            price={450}
            rating={5}
          />
          <Product
            id='3'

            title='Crystal Furnitech Engineered Wood Computer Desk  (Straight, Finish Color - Wenge, Knock Down)#JustHere'
            img='https://rukminim1.flixcart.com/image/416/416/kmjhw280/computer-table/f/e/b/particle-board-csi-59-a-crystal-furnitech-wenge-original-imagfexpjvgxvyyf.jpeg?q=70'
            price={9307}
            rating={3}
          />
          <Product
            id='4'

            title='MICROSOFT Surface Go Pentium Gold - (4 GB/64 GB EMMC Storage/Windows 10 Home in S Mode) 1824 2 in 1 Laptop  (10 inch, Platinum, 0.522 kg)'
            img='https://rukminim1.flixcart.com/image/416/416/jp8ngcw0/computer/m/g/h/microsoft-na-2-in-1-laptop-original-imafbgqzhjhmthh2.jpeg?q=70'
            price={38515}
            rating={5}
          />
          <Product
            id='5'

            title='Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (White)'
            img='https://m.media-amazon.com/images/I/61AAiJ9LJ+L._SL1000_.jpg'
            price={5999}
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            id='6'

            title='LG 27 inch 4K-UHD (3840 x 2160) HDR 10 Monitor with IPS Panel, Radeon FreeSync, Height/Pivot/Tilt Adjustable Stand, HDMI x 2, Display Port- 27UL550 (White)'
            img='https://m.media-amazon.com/images/I/71OuxUHNjEL._SL1334_.jpg'
            price={30999}
            rating={4}
          />
        </div> */}


        <div className="home__row">
         {items.map((item)=> <Product 
         key={item.id}
           id={item.id}
          img={item.image}
          title={item.title}
          price={parseInt(item.price*75)}
          rating={parseInt(item.rating)}
         />)}
        </div>
      </div>
    </div>
  )
}

export default Home
