import React, { useState } from 'react';

const Categories = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const onSelectCategory = (index) => {
    setActiveCategory(index);
  }

  return (
    <div className="categories">
      <ul>
        <li onClick={() => onSelectCategory(null)}
          className={activeCategory === null ? "active" : ""}
        >Все</li>
        {
          items && items.map((name, index) =>
            <li
              key={name}
              onClick={() => onSelectCategory(index)}
              className={activeCategory === index ? "active" : ""}
            >{name}</li>)
        }
      </ul>
    </div>
  );
}

export default Categories;
