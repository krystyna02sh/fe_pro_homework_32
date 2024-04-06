import React from "react";
import pizza9 from "../Images/pizza9.jpg"

const Meat = () => {
    return (
        <div className="card">
            <div className="photo-container">
                <img className="card-img" src={pizza9} alt="Peson portrait" />
            </div>
            <div class="card-text">
                <div>
                    <h4 className="card-title">М'ясна</h4>
                    <p className="mt">
                        Тісто для піци, соус томатний, моцарела, куряче філе, шинка,
                        пепероні, салямі, оливкова олія
                    </p>
                    <div className="f-size">
                        <button className="size" type="button">S</button>
                        <button className="size" type="button">M</button>
                        <button className="size" type="button">L</button>
                    </div>
                    <div className="flex">
                        <button type="button" className="but">+Додати</button>
                        <p className="price">290 грн</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Meat;