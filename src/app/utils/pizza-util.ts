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
    id: 0,
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

export function getCartCount() {
  const cartCount = window.localStorage.getItem('cartCount')
  if (cartCount) {
    return Number(cartCount)
  } else {
    return 0
  }
}

export function getItemsInLocalStorage(): IPizzaModel[] {
  let getItem
  let count = 0
  let items = []
  while (getItem !== null) {
    count++
    getItem = window.localStorage.getItem(`pizza${count}`)
    if (getItem) {
      items.push(JSON.parse(getItem))
    }
  }
  return items
}
