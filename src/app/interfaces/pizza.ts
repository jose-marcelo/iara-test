export interface IFilling {
  id: number
  name: string
  image?: string
  ingredients: IIngredients[]
  price: number
  stars?: string
  discount?: boolean
}

export interface IPasta {
  id: number
  name: string
  price: number
}

export interface ISize extends IPasta {}

export interface IIngredients extends IPasta {
  quantity: number
  included?: boolean
}

export interface IPizzaModel {
  id: number,
  filling: IFilling,
  pasta: IPasta,
  size: ISize
}


