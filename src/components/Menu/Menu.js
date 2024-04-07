import React from 'react';
import { useState } from 'react';
import pizza from "../Images/pizza.jpg";
import pizza2 from "../Images/pizza2.jpg";
import pizza3 from "../Images/pizza3.jpg";
import pizza5 from "../Images/pizza5.jpg";
import pizza6 from "../Images/pizza6.jpg";
import pizza7 from "../Images/pizza7.jpg";
import americano from "../Images/americano.jpg";
import espreso from "../Images/espreso.jpg";
import capuchino from "../Images/capuchino.jpg";
import late from "../Images/late.jpg"

const categories = [{
    id: "pizza",
    title: "Піца"
},
{
    id: "coffee",
    title: "Кава"

}]
const list = [{
    id: "fjgkyg",
    title: "Папероні",
    price: "270",
    imagePath: require('../Images/pizza.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, пепероні, оливки, базилік",
    categoryId: "pizza"
},
{
    id: "fарер",
    title: "Вегетеріанська",
    price: "270",
    imagePath: require('../Images/pizza2.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, помідори, перець, гриби, оливки",
    categoryId: "pizza"
},
{
    id: "bljb",
    title: "Маргарита",
    price: "250",
    imagePath: require('../Images/pizza3.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, базилік, оливкова олія",
    categoryId: "pizza"
},
{
    id: "fjkygdgdgd",
    title: "Морська",
    price: "350",
    imagePath: require('../Images/pizza5.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, кальмари, креветки,мідії, лосось, базилік, оливкова олія",
    categoryId: "pizza"
},
{
    id: "fаfgjjр",
    title: "Чотири сири",
    price: "290",
    imagePath: require('../Images/pizza6.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, помідори, перець, гриби, оливки",
    categoryId: "pizza"
},
{
    id: "blyjtyjtjb",
    title: "Формаджо",
    price: "320",
    imagePath: require('../Images/pizza7.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, базилік, оливкова олія",
    categoryId: "pizza"
},
{
    id: "blyhfgfsddtjb",
    title: "Еспресо",
    price: "30",
    imagePath: require('../Images/espreso.jpg').default,
    description: "класичний італійський напій, який завжди дарує енергію і насолоду. Насичений аромат і потужний смак кави забезпечують невимовне задоволення кожному",
    categoryId: "coffee"
},
{
    id: "blgjjkhjkh",
    title: "Американо",
    price: "40",
    imagePath: require('../Images/americano.jpg').default,
    description: "легка та ароматна кава, здобута додаванням гарячої води до еспресо, що забезпечує м'який смак та насичений аромат кави",
    categoryId: "coffee"
},
{
    id: "blvvvvvffrg",
    title: "Капучино",
    price: "55",
    imagePath: require('../Images/capuchino.jpg').default,
    description: "елегантне поєднання еспресо, ніжної молочної піни та шару какао, що створює неперевершений баланс смаку та аромату",
    categoryId: "coffee"
},
{
    id: "blhkkb",
    title: "Лате",
    price: "75",
    imagePath: require('../Images/late.jpg').default,
    description: "витончений напій з еспресо, облитого гарячим молоком, який має ніжний смак та кремову текстуру, створюючи чудову гармонію смаків",
    categoryId: "coffee"
}

]
export default () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0].id)
    const filteredList = list.filter(item => item.categoryId === selectedCategoryId)
    return <div className='container'>
        <div className='toggler'>
            {categories.map(category => {
                return <div key={category.id} className={'category-btn' + (selectedCategoryId === category.id ? 'active' : '')}
                    onClick={() => setSelectedCategoryId(category.id)}>
                    {category.title}
                </div>
            })}
        </div>
        <div className='card-container'>
            {filteredList.map(item => {
                return <div className='card' key={item.id}>
                    <div className="photo-container">
                        <img className="card-img" src={item.imagePath} alt="Peson portrait" />
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
}
