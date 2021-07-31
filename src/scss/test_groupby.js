const items = {
  '0': [
    {
      id: 0,
      name: 'Пепперони Фреш с перцем',
      imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
      price: 803,
      type: 'тонкое',
      size: 26
    }
  ],
  '3': [
    {
      id: 3,
      name: 'Кисло-сладкий цыпленок',
      imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
      price: 275,
      type: 'тонкое',
      size: 26
    },
    {
      id: 3,
      name: 'Кисло-сладкий цыпленок',
      imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
      price: 275,
      type: 'тонкое',
      size: 26
    },
    {
      id: 3,
      name: 'Кисло-сладкий цыпленок',
      imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
      price: 275,
      type: 'тонкое',
      size: 26
    },
    {
      id: 3,
      name: 'Кисло-сладкий цыпленок',
      imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
      price: 275,
      type: 'тонкое',
      size: 40
    }
  ]
}
// Задача: на выходе получить массив:
// [{id: 0, пепперони, count: 1}, {id:3, ципа-26, count: 3}, {id:3, ципа-40, count: 1}]
// группировка по id, size, type
const groupedItems = [];
Object.values(items).flat().forEach(item => {
  let outObj = groupedItems.find(obj => obj.id === item.id && obj.type === item.type && obj.size === item.size);
  if (!outObj) {
    groupedItems.push({ ...item, count: 1, price: item.price });
  } else {
    outObj.count++;
  }
});
console.log(groupedItems);
let index = 0;
console.log([...groupedItems.slice(0, index), ...groupedItems.slice(index + 1)]);