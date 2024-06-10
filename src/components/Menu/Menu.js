import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { changeCategory } from '../../redux/menuReducer';
import { addItem } from '../../counterSlice';


const list = [{
    id: "Peperoni",
    title: "Папероні",
    price: "270",
    imagePath: require('../Images/pizza.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, пепероні, оливки, базилік",
    categoryId: "pizza"
},
{
    id: "Vegeterian",
    title: "Вегетеріанська",
    price: "270",
    imagePath: require('../Images/pizza3.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, помідори, перець, гриби, оливки",
    categoryId: "pizza"
},
{
    id: "Margarita",
    title: "Маргарита",
    price: "250",
    imagePath: require('../Images/pizza2.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, базилік, оливкова олія",
    categoryId: "pizza"
},
{
    id: "Morska",
    title: "Морська",
    price: "350",
    imagePath: require('../Images/pizza5.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, кальмари, креветки,мідії, лосось, базилік, оливкова олія",
    categoryId: "pizza"
},
{
    id: "Cheese",
    title: "Чотири сири",
    price: "290",
    imagePath: require('../Images/pizza6.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, помідори, перець, гриби, оливки",
    categoryId: "pizza"
},
{
    id: "Formajo",
    title: "Формаджо",
    price: "320",
    imagePath: require('../Images/pizza7.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, базилік, оливкова олія",
    categoryId: "pizza"
},
{
    id: "Espreso",
    title: "Еспресо",
    price: "30",
    imagePath: require('../Images/espreso.jpg').default,
    description: "класичний італійський напій, який завжди дарує енергію і насолоду. Насичений аромат і потужний смак кави забезпечують невимовне задоволення кожному",
    categoryId: "coffee"
},
{
    id: "Americano",
    title: "Американо",
    price: "40",
    imagePath: require('../Images/americano.jpg').default,
    description: "легка та ароматна кава, здобута додаванням гарячої води до еспресо, що забезпечує м'який смак та насичений аромат кави",
    categoryId: "coffee"
},
{
    id: "Cappuchino",
    title: "Капучино",
    price: "55",
    imagePath: require('../Images/capuchino.jpg').default,
    description: "елегантне поєднання еспресо, ніжної молочної піни та шару какао, що створює неперевершений баланс смаку та аромату",
    categoryId: "coffee"
},
{
    id: "Late",
    title: "Лате",
    price: "75",
    imagePath: require('../Images/late.jpg').default,
    description: "витончений напій з еспресо, облитого гарячим молоком, який має ніжний смак та кремову текстуру, створюючи чудову гармонію смаків",
    categoryId: "coffee"
},
{
    id: "morskaDiscount",
    title: "Морська + кава(розмір М на вибір)",
    price: "375",
    imagePath: require('../Images/pizza5.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, кальмари, креветки,мідії, лосось, базилік, оливкова олія",
    categoryId: "discount"
},
{
    id: "cheeseDiscount",
    title: "Чотири сири + кава(розмір М на вибір)",
    price: "315",
    imagePath: require('../Images/pizza6.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, помідори, перець, гриби, оливки",
    categoryId: "discount"
},
{
    id: "formajoDiscount",
    title: "Формаджо + кава(розмір М на вибір)",
    price: "340",
    imagePath: require('../Images/pizza7.jpg').default,
    description: "Тісто для піци, соус томатний, моцарела, базилік, оливкова олія",
    categoryId: "discount"
}

]
export default () => {
    const selectedCategoryId = useSelector(state => state.menu.selectedCategoryId)
    const categories = useSelector(state => state.menu.categories)
    const dispatch = useDispatch()
    const filteredList = list.filter(item => item.categoryId === selectedCategoryId)

    return <div className='container'>
        <div className='toggler'>
            {categories.map(category => {
                return <div key={category.id} className={'category-btn' + (selectedCategoryId === category.id ? 'active' : '')}
                    onClick={() => dispatch(changeCategory(category.id))}>
                    {category.title}
                </div>
            })}
        </div>
        <div className='card-container main-container'>
            {filteredList.map(item => {
                return <div className='card' key={item.id}>
                    <div className="photo-container">
                        <img className="card-img" src={item.imagePath} alt="pizza/coffee" />
                    </div>
                    <div className='card-text'>
                        <div className='text-flex'>
                            <div className='pizza-describe'><h4 className='card-title'>{item.title}</h4>
                                <p className='mt'>{item.description}</p></div>
                            <div className='button-buy'> <div className="f-size">
                                <button className="size" type="button">S</button>
                                <button className="size" type="button">M</button>
                                <button className="size" type="button">L</button>
                            </div>
                                <div className='flex'>
                                    <button type='button' onClick={() => dispatch(addItem(item))} className='but'>+Додати</button>
                                    <p className='price'> {item.price}грн</p>
                                </div></div>

                        </div>

                    </div>
                </div>
            })}
        </div>
    </div>
}
