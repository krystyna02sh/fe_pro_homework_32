import React from "react";
import DiscountMorska from "../Pizza/DiscountMorsca";
import DiscountMeat from "../Pizza/DiscountMeat";
import DiscountHawai from "../Pizza/DiscountHawai";

const Discount = () => {
    return (
        <div className="card-container">
            <DiscountMorska />
            <DiscountMeat />
            <DiscountHawai />
        </div>
    );
}
export default Discount;