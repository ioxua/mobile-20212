import React from 'react';
import { Router } from './src/router/Router';
import {PizzaContext} from './src/services/PizzaContext'
import { usePizzaState } from './src/services/usePizzaState';

export default function App() {
  const state = usePizzaState()

  return (
    <PizzaContext.Provider value={state}>
      <Router />
    </PizzaContext.Provider>
  )
}
