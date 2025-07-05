import React from "react";
import "./header.styles.scss";
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";
import { CartIcon } from '../cart-icon/cart-icon.component';
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component';

export const Header = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen)
    
    return (
        <div className="header">
            <Link className='logo-container' to="/">
                <Logo className='logo'/>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/shop'>CONTACT</Link>
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> 
                    : <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {isCartOpen ? <CartDropdown /> : null}
        </div>
    )
}