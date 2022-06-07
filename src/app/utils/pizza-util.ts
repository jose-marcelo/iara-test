import { IPizzaModel } from '../interfaces/pizza';

export function initPizzaModel(): IPizzaModel {
  return {
    filling: {
      id: 0,
      name: '',
      ingredients: [],
      price: 0,
    },
    pasta: {
      id: 0,
      name: '',
      price: 0
    },
    size: {
      id: 0,
      name: '',
      price: 0
    }
  }
}
