import React from 'react';
import insta from "../Images/insta-logo.png";
import facebook from "../Images/facebook.png"

export default () => {
    return <footer className="footer">
        <div className='container flex-footer'>
            <div className='contacts'>
                <h5 className='contact'>Контактні дані</h5>

                <p>Uzhhorod, Zakarpattia Oblast, Ukraine</p>
                <p><a href='tel:+380660000000'>+380660000000</a></p>
                <ul>
                    <li className='work-time'>Понеділок
                        10:00 - 22:30</li>
                    <li className='work-time'>Вівторок
                        10:00 - 22:30</li>
                    <li className='work-time'>Середа
                        10:00 - 22:30</li>
                    <li className='work-time'>Четвер
                        10:00 - 22:30</li>
                    <li className='work-time'>П’ятниця
                        Неробочий день</li>
                    <li className='work-time'>Субота
                        12:00 - 22:30</li>
                    <li className='work-time'>Неділя
                        10:00 - 22:30</li>
                </ul>
            </div>
            <div className='social'>
                <div>  <a href='#'><img className='soc-adress ml' src={facebook}></img></a></div>

                <div><a href='#'><img className='soc-adress' src={insta}></img></a></div>

            </div>
            <div className='contact'>
                <h5>На карті</h5>


            </div></div>

    </footer>
}
