import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Route } from 'react-router-dom'
import { Header } from './components'
import Cart from './pages/Cart';
import Home from './pages/Home';
// actions
import { setPizzas } from './redux/actions/pizzas'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //axios.get('http://localhost:3000/db.json')
    axios.get('http://localhost:5000/pizzas')
      .then(({ data }) => {
        dispatch(setPizzas(data))
      });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
