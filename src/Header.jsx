import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket,user}]=useStateValue();

    const handleAuth=() =>{
        if(user){
            auth.signOut();
        }
        console.log(user);
    }
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
        <Link to={!user && '/login'} >
        <div onClick={handleAuth}
        className="header_option">
            <span 
            className='header_optionLine1'>
            Hello {user ? user?.email.length>10 && user?.email.slice(0,10)+'...':'Guest'}
            </span>
            <span 
            className='header_optionLine2'>
            {user ? 'Sign Out':'Sign In'}
            </span>
        </div>
        </Link>
        <Link to='/orders'>
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
        </Link>
        
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
