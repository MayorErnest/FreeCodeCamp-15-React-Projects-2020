import React from 'react';

function Categories({allCategories, handleClick}) {
    return (
        <nav>
            {allCategories.map((item)=><button id={item} onClick={handleClick}>{item}</button>)}
        </nav>
    )
}

export default Categories;
