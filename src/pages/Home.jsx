import React from 'react'
import { useSelector } from 'react-redux'
import { Categories, SortPopup, PizzaBlock } from '../components'

export default function Home() {
  const pizzas = useSelector(store => store.pizzas.items);

  if (pizzas.length === 0) return null; // чтобы не перелавалось undefined в PizzaBlock

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={[
          { name: "популярности", type: 'popular' },
          { name: "цене", type: 'price' },
          { name: "алфавиту", type: 'alphabet' }
        ]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
        <PizzaBlock />
      </div>
    </div>
  );
}


