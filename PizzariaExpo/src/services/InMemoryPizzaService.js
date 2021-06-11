const state = {
  '1': {
    id: '1',
    imageUrl: 'https://via.placeholder.com/100',
    name: 'Mussarela',
    description: 'Tem muito queijo',
    price: 35,
  },
  '2': {
    id: '2',
    imageUrl: 'https://via.placeholder.com/100',
    name: 'Toscana',
    description: 'Essa é daora',
    price: 42,
  },
}

export const save = pizza => {
  state[pizza.id ?? 0] = pizza;
};

export const list = () => {
  return Object.values(state);
}

export const exclude = (id) => {
  console.log('reying to exclude', typeof id, id)
  delete state[id];
}

