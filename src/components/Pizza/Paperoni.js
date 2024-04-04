import React from "react";
import pizza2 from "../Images/pizza2.jpg"

const Paperoni = () => {
    return (
        <div className="card">
            <div className="photo-container">
                <img className="card-img" src={pizza2} alt="Peson portrait" />
            </div>
            <div class="card-text">
                <div>
                    <h4 className="card-title">Папероні</h4>
                    <p className="mt">
                        Тісто для піци, соус томатний, моцарела, пепероні, оливки, базилік
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
export default Paperoni;