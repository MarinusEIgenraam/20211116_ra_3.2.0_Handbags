import React from 'react';
import './App.css';
import Button from "./Components/Button/Button";

const navItems = [{
  title: 'to the collection',
  destination: '/collection',
},{
    title: 'shop all bags',
    destination: '/allbags',
},{
    title: 'pre-orders',
    destination: '/preorders',
    disabled: true
}]

function App() {
    return (
        <fragment>
            <nav className={"navbar"}>
                <button type={"button"} className={"button"} onClick={() => console.log(navItems[0].title)}>
                    {navItems[0].title}
                </button>
                <button type={"button"} className={"button"} onClick={() => console.log(navItems[1].title)}>
                    {navItems[1].title}
                </button>
                <button type={"button"} className={"button"} onClick={() => console.log(navItems[2].title)} disabled={navItems[2].disabled}>
                    {navItems[2].title}
                </button>

                {navItems.map(item => {
                    const {title, className, disabled} = item;
                    return (
                        <Button title={title} disabled={disabled} className={className}/>
                    )
                })}

            </nav>
            <h1>Handbags & Purses</h1>
        </fragment>

    );
}

export default App;



