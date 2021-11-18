import React from 'react';

const Tile = function ({image, title, text}) {
    return (
        <section>
            {image ? <img src={image}/> : <div><h2>{title}</h2>{text.map((paragraph) => {
                return (<p>{paragraph}</p>)
            })}</div>}
        </section>
    )
};

export default Tile;