import axios from 'axios'

export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get('http://localhost:5000/pizzas')
    .then(({ data }) => {
      dispatch(setPizzas(data))
    });
};
export const setPizzas = (pizzas) => ({ type: 'SET_PIZZAS', payload: pizzas });
export const setLoaded = (val) => ({ type: 'SET_LOADED', payload: val });
