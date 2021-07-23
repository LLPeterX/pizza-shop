import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Categories, SortPopup, PizzaBlock } from '../components'
import { setCategory } from '../redux/actions/filters';

// внешняя константа вне Home(), чтобы ссылка на неё осталась при перерендере Home
const categoryNames = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  { name: "популярности", type: 'popular' },
  { name: "цене", type: 'price' },
  { name: "алфавиту", type: 'alphabet' }
];

export default function Home() {

  const pizzas = useSelector(store => store.pizzas.items);
  const dispatch = useDispatch();

  const onSelectCategory = React.useCallback((cat) => {
    dispatch(setCategory(cat));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} setActiveItem={onSelectCategory} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
        <PizzaBlock />
      </div>
    </div>
  );
}


