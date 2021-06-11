import { useCallback } from "react";
import { useState } from "react";

const initialState = {
  1: {
    id: "1",
    imageUrl: "https://via.placeholder.com/100",
    name: "Mussarela",
    description: "Tem muito queijo",
    price: 35,
  },
  2: {
    id: "2",
    imageUrl: "https://via.placeholder.com/100",
    name: "Toscana",
    description: "Essa é daora",
    price: 42,
  },
};

const usePizzaState = () => {
  const [state, setState] = useState(initialState);

  const save = useCallback(
    (pizza) => {
      setState({
        ...state,
        [pizza.id]: pizza,
      });
    },
    [state]
  );

  const list = () => {
    return Object.values(state);
  };

  const exclude = useCallback((id) => {
    setState((oldState) => {
      const newState = Object.assign({}, oldState);
      delete newState[id];
      return newState;
    });
  }, []);

  const getById = useCallback(
    (id) => {
      return state[id];
    },
    [state]
  );

  const getNextId = useCallback(
    (id) => {
      return Object.values(state).reduce((acc, item) => {
        if (item.id >= acc) return item.id + 1
        return acc
      }, 0)
    },
    [state]
  );

  return {
    save,
    list,
    exclude,
    getById,
  };
};

export { usePizzaState };
