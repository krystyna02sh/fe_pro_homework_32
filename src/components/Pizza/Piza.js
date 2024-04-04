import React from "react";
import pizza from "../Images/pizza.jpg"

const Piza = () => {
    return (
        <div className="card">
            <div className="photo-container">
                <img className="card-img" src={pizza} alt="Peson portrait" />
            </div>
            <div class="card-text">
                <div>
                    <h4 className="card-title">Маргарита</h4>
                    <p className="mt">
                        Тісто для піци, соус томатний, моцарела, базилік, оливкова
                        олія
                    </p>
                    <div className="f-size">
                        <button className="size" type="button">S</button>
                        <button className="size" type="button">M</button>
                        <button className="size" type="button">L</button>
                    </div>
                    <div className="flex">
                        <button type="button" className="but">+Додати</button>
                        <p className="price">230 грн</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Piza;