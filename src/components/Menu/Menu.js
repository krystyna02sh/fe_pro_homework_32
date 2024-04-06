import React from 'react';
import MenuPizza from '../MenuPizza/MenuPizza';
function Menu() {
    return (
        <div className='container'>

            <h1 className='title'>Меню</h1>

            <div className='about-box'>
                <p className='contact-box'></p>

            </div>
            <MenuPizza />
        </div>

    );
}
export default Menu;