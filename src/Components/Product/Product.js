import React from 'react';
import Trendy from "../../assets/bag_4.png";


const Product = function ({img, title, price, special}) {
    return (
        <article>
                    <span>
                        {special}
                    </span>
            <img src={img}/>
            <p>
                {title}
            </p>
            <h1>
                {price}

            </h1>

        </article>
        )

};

export default Product