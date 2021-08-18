import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}]=useStateValue();
    return (
        <div className='header'>
        <Link to='/'>
        <img 
            className ='header_logo'
            src ='http://pngimg.com/uploads/amazon/small/amazon_PNG25.png'
            alt=''
            />
        </Link>
            
        
        <div
        className ='header_search'>
        <input
        className='header_searchIn'
        type='text'
        />
        <SearchIcon 
            className='header_searchIcon'
        />
        </div>
        <div
        className="header_nav">
        <div className="header_option">
            <span 
            className='header_optionLine1'>
            Hello Guest
            </span>
            <span 
            className='header_optionLine2'>
            Sign In
            </span>
        </div>
        <div className="header_option">
        <span 
            className='header_optionLine1'>
            Returns
            </span>
            <span 
            className='header_optionLine2'>
            & Orders
            </span>
        </div>
        <div className="header_option">
        <span 
            className='header_optionLine1'>
           Your
            </span>
            <span 
            className='header_optionLine2'>
            Prime
            </span>
        </div>
        <Link to='/checkout'>
        <div className='header_shoppingBasket'>
        <ShoppingBasketIcon 
            className='header_basketIcon'
        />
        <span className='header_optionLine2 header_basketCount'>{basket?.length}</span>
        </div>
        </Link>
        </div>
        </div>
    )
}
export default Header
