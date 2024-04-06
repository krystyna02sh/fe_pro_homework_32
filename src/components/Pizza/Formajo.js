import React from "react";
import pizza7 from "../Images/pizza7.jpg"

const Caprichosa = () => {
    return (
        <div className="card">
            <div className="photo-container">
                <img className="card-img" src={pizza7} alt="Peson portrait" />
            </div>
            <div class="card-text">
                <div>
                    <h4 className="card-title">Формаджо</h4>
                    <p className="mt">
                        Тісто для піци, соус томатний, моцарела, пармезан, шинка
                        пармська, гриби, базилік, оливкова олія
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
export default Caprichosa;