import React from "react";
import pizza5 from "../Images/pizza5.jpg"

const Morska = () => {
    return (
        <div className="card">
            <div className="photo-container">
                <img className="card-img" src={pizza5} alt="Peson portrait" />
            </div>
            <div class="card-text">
                <div>
                    <h4 className="card-title">Морська</h4>
                    <p className="mt">
                        Тісто для піци, соус томатний, моцарела, кальмари, креветки,
                        мідії, лосось, базилік, оливкова олія
                    </p>
                    <div className="f-size">
                        <button className="size" type="button">S</button>
                        <button className="size" type="button">M</button>
                        <button className="size" type="button">L</button>
                    </div>
                    <div className="flex">
                        <button type="button" className="but">+Додати</button>
                        <p className="price">270 грн</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Morska;