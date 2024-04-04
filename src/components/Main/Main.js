import React from "react";
import Piza from "../Pizza/Piza";
import Paperoni from "../Pizza/Paperoni";
import Vegan from "../Pizza/Vegan";
const Main = () => {
    return (
        <div className="card-container">
            <Piza />
            <Paperoni />
            <Vegan />
        </div>

    );
}
export default Main;