import React, { useState } from 'react';

function Question({title, info}) {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
      setToggle((prevToggle)=> !prevToggle);  
    }
    return (
        <article>
            <div>
                <h1>{title}</h1>
                <button onClick={handleClick}>{toggle ? "-" : "+"}</button>
            </div>
            <p>{toggle && info}</p>
        </article>
    )
}

export default Question;
