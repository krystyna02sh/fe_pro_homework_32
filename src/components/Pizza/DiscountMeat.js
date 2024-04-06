import React from "react";
import pizza9 from "../Images/pizza9.jpg"

const DiscountMeat = () => {
    return (
        <div className="card">
            <div className="photo-container">
                <img className="card-img" src={pizza9} alt="Peson portrait" />
            </div>
            <div class="card-text">
                <div>
                    <h4 className="card-title">М'ясна(розмір L) + еспресо(капучино або лате на вибір)</h4>
                    <p className="mt">
                        Тісто для піци, соус томатний, моцарела, куряче філе, шинка,
                        пепероні, салямі, оливкова олія
                    </p>
                    <div className="flex">
                        <button type="button" className="but">+Додати</button>
                        <p className="price">350 грн</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default DiscountMeat;