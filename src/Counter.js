// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <button className='but' onClick={() => dispatch(decrement())}>-</button>
            <span className='num'>{count}</span>
            <button className='but' onClick={() => dispatch(increment())}>+</button>
        </div>
    );
};

export default Counter;


