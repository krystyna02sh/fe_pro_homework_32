import React from "react";
import MainImg from "../MainImg/MainImg";
import { useState } from 'react';
import Counter from "../../Counter";

const Action = ({ onClick }) => {
    return (
        <div className="main-container">
            <MainImg />
            <Counter />
        </div>
    );
}
export default Action;
