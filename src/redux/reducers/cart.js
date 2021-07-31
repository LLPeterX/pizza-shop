const initalState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}
// подсчет общего количества и суммы заказа
const getTotalCount = (items) => Object.values(items).flat().length;
const getTotalSum = (items) => Object.values(items).flat().reduce((sum, v) => sum + v.price, 0);

const cart = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      {
        const id = action.payload.id;
        const newItems = {
          ...state.items,
          [id]: !state.items[id] ? [action.payload] : [...state.items[id], action.payload]
        };
        // вычисление общего количества и цены
        // const itemsValues = Object.values(newItems).flat(); // массив массивов объектов пицц
        // const totalCount = itemsValues.length;
        // const totalPrice = itemsValues.reduce((sum, item) => sum + item.price, 0);
        // return { ...state, items: newItems, totalCount, totalPrice };
        return { ...state, items: newItems, totalCount: getTotalCount(newItems), totalPrice: getTotalSum(newItems) }
      }
    case 'REMOVE_FROM_CART': // уменьшить количество пицц
      {
        const { id, type, size, price } = action.payload;
        const removeIndex = state.items[id].findIndex(item => item.type === type && item.size === size);
        if (removeIndex < 0) {
          return state;
        }
        const newArray = [...state.items[id].slice(0, removeIndex), ...state.items[id].slice(removeIndex + 1)];
        const newItems = { ...state.items, [id]: newArray };
        //return { ...state, items: newItems, totalCount: state.totalCount - 1, totalPrice: state.totalPrice - price };
        return { ...state, items: newItems, totalCount: getTotalCount(newItems), totalPrice: getTotalSum(newItems) }
      }
    case 'DELETE_ORDER': // удалить всю строку из  Корзины (пицца с id, type, size)
      {
        const { id, type, size } = action.payload;
        const newArray = state.items[id].filter(order => !(order.id === id && order.type === type && order.size === size))
        const newItems = { ...state.items, [id]: newArray };
        // если массив полностью пустой, то удалить items.id
        if (newItems[id].length === 0) {
          delete newItems[id];
        }
        // пересчитать totalCount и totalPrice
        // const totalCount = Object.values(newItems).flat().length;
        // const totalPrice = Object.values(newItems).flat().reduce((sum, item) => sum + item.price, 0);
        //return { ...state.items, items: newItems, totalCount, totalPrice };
        return { ...state, items: newItems, totalCount: getTotalCount(newItems), totalPrice: getTotalSum(newItems) }
      }
    case 'CLEAR_CART': // очистка корзины
      return { ...initalState };
    default:
      return state;
  }

}

export default cart;