import React from 'react';
import './App.css';
import Button from "./Components/Button/Button";

import Handy from './assets/bag_1.png'
import Stylish from './assets/bag_2.png'
import Simple from './assets/bag_3.png'
import Trendy from './assets/bag_4.png'
import Product from "./Components/Product/Product";

const navItems = [{
    title: 'to the collection',
    destination: '/collection',
}, {
    title: 'shop all bags',
    destination: '/allbags',
}, {
    title: 'pre-orders',
    destination: '/preorders',
    disabled: true
}];

const producten = [{
    title: 'The handy bag',
    special: 'Best seller',
    price: 400,
    img: Handy
},{
    title: 'The stylish bag',
    special: 'Best seller',
    price: 250,
    img: Stylish

},{
    title: 'The simple bag',
    special: 'New collection',
    price: 300,
    img: Simple
},{
    title: 'The trendy bag',
    special: 'New collection',
    price: 150,
    img: Trendy
},]

function App() {
    return (
        <fragment>
            <nav className={"navbar"}>
                {navItems.map(item => {
                    const {title, className, disabled} = item;
                    return (
                        <Button title={title} disabled={disabled} className={className}/>
                    )
                })}
            </nav>
            <main>
                <article>
                    <span>
                    </span>
                    <img src={Trendy}/>
                    <p>
                        {producten[0].title}
                    </p>
                    <h1>
                        {producten[0].price}

                    </h1>

                </article>
                {producten.map(item => {
                    const {title, special, img, price} = item;
                    return (
                        <Product title={title} price={price} img={img} special={special}/>
                    )
                })}
            </main>
            <h1>Handbags & Purses</h1>
        </fragment>

    );
}

export default App;



