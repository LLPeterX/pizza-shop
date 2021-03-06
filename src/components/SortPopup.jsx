import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';

// composedPath - polyfill для браузеров, которые не поддерживают event.path и composePath() - напр. IE 11
function composedPath(el) {
  const path = [];
  while (el) {
    path.push(el);
    if (el.tagName === 'HTML') {
      path.push(document);
      path.push(window);
      return path;
    }
    el = el.parentElement;
  }
}

const SortPopup = React.memo(({ activeSortType, activeSortOrder, onClickSortType, onClickSortOrder, items }) => {
  // show/hide menu flag
  const [visiblePopup, setVisiblePopup] = useState(false);
  // ссылка на div меню сортировки
  const sortRef = useRef();

  // обработчик клика на станице. Надо учесть, что event.path работает не на всех браузерах.
  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath()) || composedPath(event.target);
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  }

  // скрыть sort popup при клике за пределами меню сортировки
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const togglePopupVisible = () => {
    setVisiblePopup(!visiblePopup);
  }

  const onSelectItem = (index) => {
    onClickSortType(index);
    setVisiblePopup(false);
  }

  const onSelectOrder = () => {
    onClickSortOrder();
  }

  const activeLabel = items.find(e => e.type === activeSortType)?.name;

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          className={activeSortOrder === 'asc' ? "rotated" : ""}
          onClick={onSelectOrder}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={togglePopupVisible}>{activeLabel}</span>
      </div>
      {visiblePopup &&
        <div className="sort__popup">
          <ul>
            {
              items && items.map((obj, index) =>
                <li
                  key={obj.type}
                  onClick={() => onSelectItem(obj.type)}
                  className={obj.type === activeSortType ? "active" : ""}
                >{obj.name}</li>)
            }
          </ul>
        </div>
      }
    </div>
  )
});

SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  onClickSortType: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object)
};

SortPopup.defaultProps = {
  activeSortType: 'name'
}

export default SortPopup;