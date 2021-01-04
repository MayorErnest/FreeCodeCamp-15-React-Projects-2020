import React from 'react';

function Menu({id,title, price, img, desc}) {
    return (
        <article>
            <div className="item-1">
                <img src={img} alt={`img${id}`} />
            </div>
            <div className="item-2">
                <div>
                    <h4>{title}</h4>
                    <h4>${price}</h4>
                </div>
                <p>{desc}</p>
            </div>
        </article>
    )
}

export default Menu;
