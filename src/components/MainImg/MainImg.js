import React from "react";
import mainp from "./main-p.jpg"
const MainImg = () => {
    return (
        <div className="piza-container">
            <img className="main-picture" src={mainp} alt="main-picture" />
            <h1 className="pizza-title">Ласкаво просимо до Korzo pizza!</h1>
        </div >
    )
}
export default MainImg;