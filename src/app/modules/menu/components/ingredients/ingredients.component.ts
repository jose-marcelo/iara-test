import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPizzaModel } from 'src/app/interfaces/pizza';
import { IIngredients } from '../../../../interfaces/pizza';
import { Router } from '@angular/router';
import { initPizzaModel } from 'src/app/utils/pizza-util';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  allIngredients: IIngredients[] = [
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
    },
    {
      id: 4,
      name: 'Presunto',
      price: 5,
      quantity: 1
    },
    {
      id: 5,
      name: 'Brócolis',
      price: 4,
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
      id: 8,
      name: 'Manjericão',
      price: 4,
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
    }
  ]

  ingredients: IIngredients[] = []

  @Input() pizzaModel: IPizzaModel
  @Output() nextStep = new EventEmitter()


  constructor(
    private router: Router
  ) {
    this.pizzaModel = initPizzaModel()
  }

  ngOnInit(): void {
    this.ingredients = this.pizzaModel.filling.ingredients
  }

  goToCartPage() {
    console.log(this.pizzaModel)
    // this.router.navigateByUrl('cart')
  }
}
