import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components'

export default function Home({ pizzas }) {
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
        {/* ниже через map() выводим наши пиццы. Пока только одна - для теста */}
        {pizzas && pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
        <PizzaBlock />
      </div>
    </div>
  );
}


