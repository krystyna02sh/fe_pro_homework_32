import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../../counterSlice';
const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter[item.id].count)
    const handleIncrement = () => {
        dispatch(increment({ target: item.id }));
    };

    const handleRemove = () => {
        dispatch(removeItem({ id: item.id, price: item.price, quantity: count }));
    };
    const handleDecrement = () => {
        if (count > 0) {
            dispatch(decrement({ target: item.id }));
        }
        if (count === 1) {
            handleRemove();
        }
    };
    return (

        <li className="cart-list-item">
            <section className="cart-list-section cart-list-img-section">

                <h4>{item.title}</h4>
            </section>
            <section className="cart-list-section cart-list-quantity-section">
                <div>
                    <button className='but-count' onClick={handleDecrement}>-</button>
                    <span className='num'>{count}</span>
                    <button className='but-count' onClick={handleIncrement}>+</button>
                </div>

            </section>
            <section className="cart-list-section cart-list-price-section">
                <span>{item.price} грн</span>


            </section>
            <section className="cart-list-section">
                <button className='but' type="button" onClick={handleRemove}>Видалити</button>
            </section>
        </li>

    );
};

export default CartItem;