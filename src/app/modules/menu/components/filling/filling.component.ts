import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilling } from 'src/app/interfaces/pizza';

@Component({
  selector: 'app-filling',
  templateUrl: './filling.component.html',
  styleUrls: ['./filling.component.scss']
})

export class FillingComponent implements OnInit {

  pizzas: IFilling[] = [
    {
      id: 1,
      name: 'Muçarela',
      image: '/assets/images/pizzas/mucarela.png',
      ingredients: 'Queijo muçarela, molho de tomate e orégano.',
      price: 20.50,
      stars: '4,8',
      discount: true
    },
    {
      id: 2,
      name: 'Bauru',
      image: '/assets/images/pizzas/bauru.png',
      ingredients: 'Muçarela, presunto, molho de tomate e orégano.',
      price: 25.00,
      stars: '4,5',
      discount: false
    },
    {
      id: 3,
      name: 'Brócolis',
      image: '/assets/images/pizzas/brocolis.png',
      ingredients: 'Muçarela, brócolis, requeijão, molho de tomate e orégano.',
      price: 25.00,
      stars: '4,9',
      discount: false
    },
    {
      id: 4,
      name: 'Calabresa',
      image: '/assets/images/pizzas/calabresa.png',
      ingredients: 'Muçarela, calabresa, cebola, molho de tomate e orégano.',
      price: 25.50,
      stars: '4,9',
      discount: false
    },
    {
      id: 5,
      name: 'Marguerita',
      image: '/assets/images/pizzas/marguerita.png',
      ingredients: 'Muçarela, manjericão, molho de tomate e orégano.',
      price: 22.00,
      stars: '4,6',
      discount: false
    },
    {
      id: 6,
      name: 'Portuguesa',
      image: '/assets/images/pizzas/portuguesa.png',
      ingredients: 'Muçarela, presunto, ervilha, ovo, palmito, cebola, molho de tomate e orégano.',
      price: 30.00,
      stars: '4,2',
      discount: false
    }
  ]

  @Input() pizzaModel: any
  @Output() nextStep = new EventEmitter()

  pizzaSelected: number = 0

  constructor() { }

  ngOnInit(): void {
    this.pizzaSelected = this.pizzaModel.id
  }

  getPizzaPrice(pizza: IFilling): string {
    if (pizza.discount) {
      const newPrice = pizza.price - (pizza.price * 0.2)
      return String(newPrice.toFixed(2)).replace('.', ',')
    } else {
      return String(pizza.price.toFixed(2)).replace('.', ',')
    }
  }

  selectPizza(pizzaId: number) {
    this.pizzaSelected = pizzaId
    this.pizzaModel.id = this.pizzaSelected
  }

  pizzaIsSelected(pizzaId: number): boolean {
    return this.pizzaSelected === pizzaId
  }

  goNextStep() {
    if (this.pizzaSelected) {
      this.nextStep.emit()
    }
  }

}
