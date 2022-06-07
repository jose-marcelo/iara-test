import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFilling } from 'src/app/interfaces/pizza';
import { initPizzaModel } from 'src/app/utils/pizza-util';
import { IIngredients, IPizzaModel } from '../../../../interfaces/pizza';

@Component({
  selector: 'app-filling',
  templateUrl: './filling.component.html',
  styleUrls: ['./filling.component.scss']
})

export class FillingComponent {

  fillings: IFilling[] = [
    {
      id: 1,
      name: 'Muçarela',
      image: '/assets/images/pizzas/mucarela.png',
      ingredients: [
        {
          id: 1,
          name: 'Queijo muçarela',
          price: 6,
          quantity: 1
        },
        {
          id: 2,
          name: 'Molho de tomate',
          price: 2,
          quantity: 1
        },
        {
          id: 3,
          name: 'Orégano',
          price: 1,
          quantity: 1
        }
      ],
      price: 20.50,
      stars: '4,8',
      discount: true
    },
    {
      id: 2,
      name: 'Bauru',
      image: '/assets/images/pizzas/bauru.png',
      ingredients: [
        {
          id: 4,
          name: 'Presunto',
          price: 5,
          quantity: 1
        },
        {
          id: 1,
          name: 'Queijo muçarela',
          price: 6,
          quantity: 1
        },
        {
          id: 2,
          name: 'Molho de tomate',
          price: 2,
          quantity: 1
        },
        {
          id: 3,
          name: 'Orégano',
          price: 1,
          quantity: 1
        }
      ],
      price: 25.00,
      stars: '4,5',
      discount: false
    },
    {
      id: 3,
      name: 'Brócolis',
      image: '/assets/images/pizzas/brocolis.png',
      ingredients: [
        {
          id: 1,
          name: 'Queijo muçarela',
          price: 6,
          quantity: 1
        },
        {
          id: 5,
          name: 'Brócolis',
          price: 4,
          quantity: 1
        },
        {
          id: 2,
          name: 'Molho de tomate',
          price: 2,
          quantity: 1
        },
        {
          id: 3,
          name: 'Orégano',
          price: 1,
          quantity: 1
        }
      ],
      price: 25.00,
      stars: '4,9',
      discount: false
    },
    {
      id: 4,
      name: 'Calabresa',
      image: '/assets/images/pizzas/calabresa.png',
      ingredients: [
        {
          id: 1,
          name: 'Queijo muçarela',
          price: 6,
          quantity: 1
        },
        {
          id: 6,
          name: 'Calabresa',
          price: 4,
          quantity: 1
        },
        {
          id: 7,
          name: 'Cebola',
          price: 2,
          quantity: 1
        },
        {
          id: 2,
          name: 'Molho de tomate',
          price: 2,
          quantity: 1
        },
        {
          id: 3,
          name: 'Orégano',
          price: 1,
          quantity: 1
        }
      ],
      price: 25.50,
      stars: '4,9',
      discount: false
    },
    {
      id: 5,
      name: 'Marguerita',
      image: '/assets/images/pizzas/marguerita.png',
      ingredients: [
        {
          id: 1,
          name: 'Queijo muçarela',
          price: 6,
          quantity: 1
        },
        {
          id: 8,
          name: 'Manjericão',
          price: 4,
          quantity: 1
        },
        {
          id: 2,
          name: 'Molho de tomate',
          price: 2,
          quantity: 1
        },
        {
          id: 3,
          name: 'Orégano',
          price: 1,
          quantity: 1
        }
      ],
      price: 22.00,
      stars: '4,6',
      discount: false
    },
    {
      id: 6,
      name: 'Portuguesa',
      image: '/assets/images/pizzas/portuguesa.png',
      ingredients: [
        {
          id: 1,
          name: 'Queijo muçarela',
          price: 6,
          quantity: 1
        },
        {
          id: 4,
          name: 'Presunto',
          price: 5,
          quantity: 1
        },
        {
          id: 9,
          name: 'Ervilha',
          price: 5,
          quantity: 1
        },
        {
          id: 10,
          name: 'Ovo',
          price: 5,
          quantity: 1
        },
        {
          id: 11,
          name: 'Palmito',
          price: 5,
          quantity: 1
        },
        {
          id: 7,
          name: 'Cebola',
          price: 5,
          quantity: 1
        },
        {
          id: 2,
          name: 'Molho de tomate',
          price: 2,
          quantity: 1
        },
        {
          id: 3,
          name: 'Orégano',
          price: 1,
          quantity: 1
        }
      ],
      price: 30.00,
      stars: '4,2',
      discount: false
    }
  ]

  @Input() pizzaModel: IPizzaModel
  @Output() nextStep = new EventEmitter()

  constructor() {
    this.pizzaModel = initPizzaModel()
  }

  getFillingPrice(filling: IFilling): string {
    if (filling.discount) {
      const newPrice = filling.price - (filling.price * 0.2)
      return String(newPrice.toFixed(2)).replace('.', ',')
    } else {
      return String(filling.price.toFixed(2)).replace('.', ',')
    }
  }

  selectFilling(filling: IFilling) {
    this.pizzaModel.filling = filling
  }

  fillingIsSelected(pizzaId: number): boolean {
    return this.pizzaModel.filling.id === pizzaId
  }

  goNextStep() {
    if (this.pizzaModel.filling.id) {
      this.nextStep.emit()
    }
  }

  getIngredientsLabel(ingredients: IIngredients[]) {
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

}
