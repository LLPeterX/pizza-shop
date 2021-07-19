import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { Header } from './components'
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then(resp => resp.json())
      .then(data => setPizzas(data.pizzas));

  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div>
        {pizzas.length}
        <ul>
          {
            pizzas.map(p => <li key={p.id}>{p.name}</li>)
          }
        </ul>
      </div>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
