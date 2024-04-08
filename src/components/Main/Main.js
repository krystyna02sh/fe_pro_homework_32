import React from "react";
import MainImg from "../MainImg/MainImg";
const list = [
    {
        id: "fjkytfyrthgd",
        title: "Морська + кава(розмір М на вибір)",
        price: "375",
        imagePath: require('../Images/pizza5.jpg').default,
        description: "Тісто для піци, соус томатний, моцарела, кальмари, креветки,мідії, лосось, базилік, оливкова олія",
        categoryId: "pizza"
    },
    {
        id: "fаthyrhjjр",
        title: "Чотири сири + кава(розмір М на вибір)",
        price: "315",
        imagePath: require('../Images/pizza6.jpg').default,
        description: "Тісто для піци, соус томатний, моцарела, помідори, перець, гриби, оливки",
        categoryId: "pizza"
    },
    {
        id: "blyyyyyyjyjtjb",
        title: "Формаджо + кава(розмір М на вибір)",
        price: "340",
        imagePath: require('../Images/pizza7.jpg').default,
        description: "Тісто для піци, соус томатний, моцарела, базилік, оливкова олія",
        categoryId: "pizza"
    },
]

export default () => {

    return <div>
        <MainImg />
        <div className="container">
            <h2> Акційні пропозиції від Korzo-pizza</h2>
            <div className='card-container'>
                {list.map(item => {
                    return <div className='card' key={item.id}>
                        <div className="photo-container">
                            <img className="card-img" src={item.imagePath} alt="pizza/coffee" />
                        </div>
                        <div className='card-text'>
                            <div>
                                <h4 className='card-title'>{item.title}</h4>
                                <p className='mt'>{item.description}</p>
                                <div className="f-size">
                                    <button className="size" type="button">S</button>
                                    <button className="size" type="button">M</button>
                                    <button className="size" type="button">L</button>
                                </div>
                                <div className='flex'>
                                    <button type='button' className='but'>+Додати</button>
                                    <p className='price'> {item.price}грн</p>
                                </div>
                            </div>

                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}