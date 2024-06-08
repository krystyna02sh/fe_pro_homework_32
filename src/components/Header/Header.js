import React from 'react';
import { Link } from "react-router-dom";
import buy from "../Images/basket.png";
import CartIcon from './CartIcon';
const Header = () => {
    return (
        <header><div className='container'>
            <nav>
                <ul className='flex-nav'>
                    <li className='item'>
                        <Link to="/">Головна</Link>
                    </li>
                    <li className='item'>
                        <Link to="/about">Про нас</Link>
                    </li>
                    <li className='item'>
                        <Link to="/menu">Меню</Link>
                    </li>
                    <li className='item'>
                        <Link to="/basket"><img className='basket' src={buy} alt="basket"></img><CartIcon /></Link>

                    </li>
                </ul>
            </nav>
        </div>
        </header>
    );
}
export default Header;