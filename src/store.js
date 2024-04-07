import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './redux/menuReducer';

const store = configureStore({
    reducer: {
        menu: menuReducer
    }
});

export default store;