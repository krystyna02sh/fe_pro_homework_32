import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header><div className='container'>
            <nav>
                <ul className='flex-nav'>
                    <li className='item'>
                        <Link to="/">Main</Link>
                    </li>
                    <li className='item'>
                        <Link to="/about">About page</Link>
                    </li>
                    <li className='item'>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li className='item'>
                        <Link to="/basket">Basket</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
    );
}
export default Header;