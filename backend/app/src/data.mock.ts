export const pizzas = [
  {
    name: 'Margherita',
    price: 5,
    ingredients: [{ name: 'tomato' }, { name: 'mozzarella' }],
  },
  {
    name: 'Bufala',
    price: 6,
    ingredients: [{ name: 'tomato' }, { name: 'mozarella di bufala' }],
  },
  {
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
    name: 'Diavola',
    price: 7.5,
    ingredients: [
      { name: 'tomato' },
      { name: 'mozzarella' },
      { name: 'spicy salami' },
    ],
  },
  {
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
