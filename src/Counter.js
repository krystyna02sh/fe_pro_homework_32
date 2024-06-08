// Counter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './counterSlice';



const Counter = () => {
    const list = [
        {
            id: "morskaDiscount",
            title: "Морська + кава(розмір М на вибір)",
            price: "375",
            imagePath: require('./components/Images/pizza5.jpg').default,
            description: "Тісто для піци, соус томатний, моцарела, кальмари, креветки,мідії, лосось, базилік, оливкова олія",
            categoryId: "pizza"
        },
        {
            id: "cheeseDiscount",
            title: "Чотири сири + кава(розмір М на вибір)",
            price: "315",
            imagePath: require('./components/Images/pizza6.jpg').default,
            description: "Тісто для піци, соус томатний, моцарела, помідори, перець, гриби, оливки",
            categoryId: "pizza"
        },
        {
            id: "formajoDiscount",
            title: "Формаджо + кава(розмір М на вибір)",
            price: "340",
            imagePath: require('./components/Images/pizza7.jpg').default,
            description: "Тісто для піци, соус томатний, моцарела, базилік, оливкова олія",
            categoryId: "pizza"
        },
    ]
    const dispatch = useDispatch();


    return (
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
                                    <button type='button' onClick={() => dispatch(addItem(item))} className='but'>+Додати</button>
                                    <p className='price'> {item.price}грн</p>
                                </div>
                            </div>

                        </div>
                    </div>
                })}
            </div>

        </div>


    );
};

export default Counter;


