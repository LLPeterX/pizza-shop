import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Route } from 'react-router-dom'
import { Header } from './components'
import Cart from './pages/Cart';
import Home from './pages/Home';
// actions
import { setPizzas } from './redux/actions/pizzas'

function App() {

  console.log('render App');
  //const [pizzas, setPizzas] = useState([]);
  const dispatch = useDispatch();
  const pizzasItems = useSelector(store => store.pizzas.items)

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => dispatch(setPizzas(data.pizzas)));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home pizzas={pizzasItems} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
