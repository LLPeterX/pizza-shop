import React from 'react';

const Categories = ({ items, onSelectCategory, activeCategory }) => {
  let activeCat = activeCategory || "Все";
  return (
    <div className="categories">
      <ul>
        {
          items.map((name) =>
            <li
              key={name}
              onClick={() => onSelectCategory(name)}
              className={activeCat === name ? "active" : ""}
            >{name}</li>)
        }
      </ul>
    </div>
  );
}

export default Categories;
