import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Categories, SortPopup, PizzaBlock } from '../components'
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas'
import Loader from 'react-js-loader'

// внешняя константа вне Home(), чтобы ссылка на неё осталась при перерендере Home
const categoryNames = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  { name: "популярности", type: 'popular' },
  { name: "цене", type: 'price' },
  { name: "алфавиту", type: 'alphabet' }
];

export default function Home() {

  const pizzas = useSelector(store => store.pizzas.items);
  const isLoaded = useSelector(store => store.pizzas.isLoaded);
  const dispatch = useDispatch();

  React.useEffect(() => {
    //if (pizzas.length === 0) {
    dispatch(fetchPizzas());
    //}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectCategory = React.useCallback((cat) => {
    dispatch(setCategory(cat));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} setActiveItem={onSelectCategory} />
        <SortPopup items={sortItems} />
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


