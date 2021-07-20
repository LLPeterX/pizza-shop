import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components'

export default function Home({ pizzas }) {

  if (pizzas.length === 0) return null; // чтобы не перелавалось undefined в PizzaBlock

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas && pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
        <PizzaBlock />
      </div>
    </div>
  );
}


