import React from "react";
import pizza5 from "../Images/pizza5.jpg"

const DiscountMorska = () => {
    return (
        <div className="card">
            <div className="photo-container">
                <img className="card-img" src={pizza5} alt="Peson portrait" />
            </div>
            <div class="card-text">
                <div>
                    <h4 className="card-title">Морська (розмір L) + еспресо(капучино або лате на вибір) </h4>
                    <p className="mt">
                        Тісто для піци, соус томатний, моцарела, кальмари, креветки,
                        мідії, лосось, базилік, оливкова олія
                    </p>

                    <div className="flex">
                        <button type="button" className="but">+Додати</button>
                        <p className="price">300 грн</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default DiscountMorska;