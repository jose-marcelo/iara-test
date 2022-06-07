import { IPizzaModel, IFilling, IPasta, ISize, IIngredients } from '../interfaces/pizza';

export function initFilling(): IFilling {
  return {
    id: 0,
    name: '',
    ingredients: [],
    price: 0,
  }
}

export function initPasta(): IPasta {
  return {
    id: 0,
    name: '',
    price: 0
  }
}

export function initSize(): ISize {
  return initPasta()
}

export function initPizzaModel(): IPizzaModel {
  return {
    filling: initFilling(),
    pasta: initPasta(),
    size: initSize()
  }
}

export function getIngredientsLabel(ingredients: IIngredients[]) {
  let stringList: string[] = []
  ingredients.forEach((ingredient, index) => {
    if (index === 0) {
      stringList.push(ingredient.name)
    } else {
      stringList.push(ingredient.name.toLowerCase())
    }
  })
  return stringList.join(', ')
}
