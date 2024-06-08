import React from "react";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearOrder } from "../../counterSlice";

const Basket = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.counter.items)
    const total = useSelector(state => state.counter.total)
    return (
        <div className='container koshik'>
            <div className="cart">
                <div>
                    <h2>Кошик</h2>
                    {cart.length === 0 ? (
                        <p className="cart-empty-title">Ваш кошик пустий</p>
                    ) : (
                        <div className="cart-list-wrapper">
                            <ul className="cart-list">
                                {cart.map((item, index) => (
                                    < CartItem
                                        key={index}
                                        item={item}

                                    />
                                ))}
                            </ul>
                            <button className='but' onClick={() => dispatch(clearOrder())} type='button'> Очистити кошик</button>
                            <div><p>Всього за покупку {total} грн</p></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Basket;