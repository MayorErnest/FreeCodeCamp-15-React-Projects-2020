import React, { useState } from "react";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

function App() {
  let [items, setItems] = useState(data);

  let allCategories = ['all', ...new Set(data.map((item)=>item.category))];

  let handleClick = (e) => {
    if (e.target.id == 'all') {
      setItems(data);
    }else {
      setItems(data.filter((item)=>item.category == e.target.id));
    }
  }
  
  return (
    <main>
      <h1>Our Menu</h1>
      <hr />
      <Categories allCategories={allCategories} handleClick={handleClick}/>
      <section>
        {items.map((item)=><Menu key={item.id} {...item}/>)}
      </section>
    </main>
  );
}

export default App;
