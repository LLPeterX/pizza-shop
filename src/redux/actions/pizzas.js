import axios from 'axios'

export const fetchPizzas = (category, sortBy, sortOrder = "desc") => (dispatch) => {
  console.log(` fetchPizzas(): cat=${category} sortBy=${sortBy}`);
  dispatch(setLoaded(false));
  let options = "";
  if (category != null) {
    options += `category=${category}`;
    options += "&";
  }
  if (sortBy === 'price') {
    options += "_sort=price";
  } else if (sortBy === 'rating') {
    options += '_sort=rating';
  } else if (sortBy === 'alphabet') {
    options += "_sort=name"
  }
  options += `&_order=${sortOrder}`;

  console.log('  call ', options);
  axios.get(`http://localhost:5000/pizzas?${options}`)
    .then(({ data }) => {
      dispatch(setPizzas(data))
    });
};
export const setPizzas = (pizzas) => ({ type: 'SET_PIZZAS', payload: pizzas });
export const setLoaded = (val) => ({ type: 'SET_LOADED', payload: val });
