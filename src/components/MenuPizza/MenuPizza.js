import React from "react";
import Piza from "../Pizza/Piza";
import Paperoni from "../Pizza/Paperoni";
import Vegan from "../Pizza/Vegan";
import Morska from "../Pizza/Morska";
import Hawai from "../Pizza/Hawai";
import Formajo from "../Pizza/Formajo";
import Cheesus from "../Pizza/Cheesus";
import Meat from "../Pizza/Meat";
import Caprichosa from "../Pizza/Caprichosa";
const MenuPizza = () => {
    return (
        <div className="card-container">
            <Piza />
            <Paperoni />
            <Vegan />
            <Morska />
            <Hawai />
            <Formajo />
            <Cheesus />
            <Meat />
            <Caprichosa />
        </div>
    );
}
export default MenuPizza;
