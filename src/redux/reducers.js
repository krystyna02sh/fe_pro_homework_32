import React from "react";
import { combineReducers } from '@reduxjs/toolkit';
import menuReducer from "./menuReducer";
import counterReducer from "../counterSlice";




const rootReducer = combineReducers({
    menu: menuReducer,
    counter: counterReducer,

});

export default rootReducer;