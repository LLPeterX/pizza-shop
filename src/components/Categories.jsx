import React from 'react';

const Categories = ({ items, onClick }) => {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {
          items.map((name) => <li key={name} onClick={() => onClick(name)}>{name}</li>)
        }
      </ul>
    </div>
  );
}

export default Categories;
