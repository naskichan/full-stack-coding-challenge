export const pizzas = [
  {
    id: 1,
    name: 'Margherita',
    price: 5,
    ingredients: [{ name: 'tomato' }, { name: 'mozzarella' }],
  },
  {
    id: 2,
    name: 'Bufala',
    price: 6,
    ingredients: [{ name: 'tomato' }, { name: 'mozarella di bufala' }],
  },
  {
    id: 3,
    name: 'Romana',
    price: 5,
    ingredients: [
      { name: 'tomato' },
      { name: 'mozzarella' },
      { name: 'anchovies' },
      { name: 'oregano' },
      { name: 'oil' },
    ],
  },
  {
    id: 4,
    name: 'Diavola',
    price: 7.5,
    ingredients: [
      { name: 'tomato' },
      { name: 'mozzarella' },
      { name: 'spicy salami' },
    ],
  },
  {
    id: 5,
    name: 'Pizza Bianca',
    price: 5,
    ingredients: [{ name: 'mozzarella' }, { name: 'oregano' }],
  },
];
export const ingredients = [];
export const orders = [
  {
    orderItems: [],
  },
];

/*
{
    orderItems: [
      {
        pizza: {
          ingredients: ['tomato', 'mozzarella'],
          name: 'Magherita',
          price: 5,
        },
        count: 2,
      },
      {
        pizza: {
          ingredients: [{ name: 'mozzarella' }, { name: 'oregano' }],
          name: 'Pizza Bianca',
          price: 5,
        },
        count: 2,
      },
    ],
  },
];
*/
