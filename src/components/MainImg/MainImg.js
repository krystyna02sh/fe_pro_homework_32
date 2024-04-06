import React from "react";
import logo from "./main-p.jpg"
const MainImg = () => {
    return (
        <div className="piza-container">
            <div> <h1>Ласкаво просимо до Korzo pizza!</h1></div>

            <img className="main-img" src={logo} alt="pizza-slice" />
        </div>
    )
}
export default MainImg;