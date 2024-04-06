import React from "react";
import pizza6 from "../Images/pizza6.jpg"

const DiscountHawai = () => {
    return (
        <div className="card">
            <div className="photo-container">
                <img className="card-img" src={pizza6} alt="Peson portrait" />
            </div>
            <div class="card-text">
                <div>
                    <h4 className="card-title">Гавайська (розмір L) + еспресо(капучино або лате на вибір)</h4>
                    <p className="mt">
                        Тісто для піци, соус томатний, моцарела, куряче філе, ананас,
                        бекон, оливкова олія
                    </p>
                    <div className="flex">
                        <button type="button" className="but">+Додати</button>
                        <p className="price">290 грн</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default DiscountHawai;