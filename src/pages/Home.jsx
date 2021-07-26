import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Categories, SortPopup, PizzaBlock } from '../components'
import { setCategory, setSortBy, setSortOrder } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas'
import Loader from 'react-js-loader'

// внешняя константа вне Home(), чтобы ссылка на неё осталась при перерендере Home
const categoryNames = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  { name: "популярности", type: 'rating' },
  { name: "цене", type: 'price' },
  { name: "алфавиту", type: 'name' }
];

export default function Home() {

  const pizzas = useSelector(store => store.pizzas.items);
  const isLoaded = useSelector(store => store.pizzas.isLoaded);
  const { category, sortBy, sortOrder } = useSelector(store => store.filters);

  const dispatch = useDispatch();

  React.useEffect(() => {
    //if (pizzas.length === 0) {
    dispatch(fetchPizzas(category, sortBy, sortOrder));
    //}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortBy, sortOrder]);

  const onSelectCategory = React.useCallback((cat) => {
    dispatch(setCategory(cat));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectSortType = React.useCallback((sortName) => {
    dispatch(setSortBy(sortName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectSortOrder = React.useCallback(() => {
    dispatch(setSortOrder());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} activeCategory={category} onSelectCategory={onSelectCategory} />
        <SortPopup
          items={sortItems}
          activeSortType={sortBy}
          activeSortOrder={sortOrder}
          onClickSortType={onSelectSortType}
          onClickSortOrder={onSelectSortOrder}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)
          : <Loader type="spinner-circle" color="#000000" bgColor="#FFFFFF" />
        }
      </div>
    </div>
  );
}


