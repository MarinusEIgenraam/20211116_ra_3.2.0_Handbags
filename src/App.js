import React from 'react';
import './App.css';

///////////////////////
//// Images
import Handy from './assets/bag_1.png'
import Stylish from './assets/bag_2.png';
import Simple from './assets/bag_3.png';
import Trendy from './assets/bag_4.png';
import Brand from './assets/brand.png';
import About from './assets/our_story.png';

///////////////////////
//// Components
import Product from "./Components/Product/Product";
import Button from "./Components/Button/Button";
import Tile from "./Components/Tile/Tile";

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
}, {
    title: 'The stylish bag',
    special: 'Best seller',
    price: 250,
    img: Stylish

}, {
    title: 'The simple bag',
    special: 'New collection',
    price: 300,
    img: Simple
}, {
    title: 'The trendy bag',
    special: 'New collection',
    price: 150,
    img: Trendy
},]

const tile = [{
    image: '',
    title: 'The Brand',
    text: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur culpa debitis\n' +
    '                        delectus, dolor dolorum earum esse eveniet expedita illum in ipsum, libero maxime minus omnis\n' +
    '                        quam recusandae repellendus sequi suscipit temporibus, velit veritatis vitae! Doloremque eos eum\n' +
    '                        nihil rem.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur culpa debitis\n' +
    '                        delectus, dolor dolorum earum esse eveniet expedita illum in ipsum, libero maxime minus omnis\n' +
    '                        quam recusandae repellendus sequi suscipit temporibus, velit veritatis vitae! Doloremque eos eum\n' +
    '                        nihil rem.'],

}, {
    image: Brand,
    alt: 'Brand',
    title: '',
    text: [{}],
}, {
    image: About,
    alt: 'About',
    title: '',
    text: [{}],
}, {
    image: '',
    title: 'Our story',
    text: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur culpa debitis\n" +
    "                        delectus, dolor dolorum earum esse eveniet expedita illum in ipsum, libero maxime minus omnis\n" +
    "                        quam recusandae repellendus sequi suscipit temporibus, velit veritatis vitae! Doloremque eos eum\n" +
    "                        nihil rem."],
}]

function App() {
    return (
        <fragment>
            <h1>Handbags & Purses</h1>
            <nav className={"navbar"}>
                {navItems.map(item => {
                    const {title, className, disabled} = item;
                    return (
                        <Button title={title} disabled={disabled} className={className}/>
                    )
                })}
            </nav>
            <main>

                {producten.map(item => {
                    const {title, special, img, price} = item;
                    return (
                        <Product title={title} price={price} img={img} special={special}/>
                    )
                })}
            </main>
            <footer>
                {tile.map((item) => {
                    return (
                        <section>
                            {item.image ? <img src={item.image}/> :
                                <div><h2>{item.title}</h2>{item.text.map((paragraph) => {
                                    return (<p>{paragraph}</p>)
                                })}</div>}
                        </section>
                    )
                })}
                {tile.map((item) => {
                    const {image, title, text} = item;
                    return (
                        <Tile title={title} image={image} text={text}/>
                    )
                })}
            </footer>
        </fragment>

    );
}

export default App;



