import React from 'react';
import insta from "../Images/insta-logo.png";
import facebook from "../Images/facebook.png"

export default () => {
    return <footer className="footer">
        <div className='container flex-footer'>
            <div className='contacts'>


                <p>Uzhhorod, Zakarpattia Oblast, Ukraine</p>
                <p><a href='tel:+380660000000'>+380660000000</a></p>

            </div>
            <div><p>Замовлення приймаємо з 10:00 -22:30</p></div>

            <div className='contact'>
                <h5><a href='https://maps.app.goo.gl/9V7YiWQmTsJJAYNq7' target='blank'>На карті</a></h5>


            </div>
            <div className='social'>
                <a href='#'><img className='soc-adress ml' src={facebook}></img></a>
            </div>
        </div>

    </footer>
}
