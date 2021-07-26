import PropTypes from 'prop-types';
import React from 'react';

const Categories = React.memo(({ activeCategory, items, onSelectCategory }) => {

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
});

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  setActiveItem: PropTypes.func
}

Categories.defaultProps = {
  activeCategory: null,
  items: []
}

export default Categories;
