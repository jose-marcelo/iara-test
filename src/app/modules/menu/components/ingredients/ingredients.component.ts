import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPizzaModel } from 'src/app/interfaces/pizza';
import { IIngredients } from '../../../../interfaces/pizza';
import { Router } from '@angular/router';
import { getCartCount, initPizzaModel } from 'src/app/utils/pizza-util';
import { getItemsInLocalStorage } from '../../../../utils/pizza-util';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredients: IIngredients[] = []
  items: IPizzaModel[] = []

  @Input() pizzaModel: IPizzaModel
  @Output() nextStep = new EventEmitter()

  constructor(
    private router: Router
  ) {
    this.pizzaModel = initPizzaModel()
  }

  ngOnInit(): void {
    this.ingredients = this.pizzaModel.filling.ingredients
    this.items = getItemsInLocalStorage()
  }

  goToCartPage() {
    let cartCount = getCartCount()
    cartCount++

    // this.putIdInPizzaModel()

    window.localStorage.setItem(
      `pizza${cartCount}`,
      JSON.stringify(this.pizzaModel)
    )
    window.localStorage.setItem('cartCount', String(cartCount))

    this.router.navigateByUrl('cart')
  }

  putIdInPizzaModel() {
    let randomNumber = Math.random() * 100 || 101
    let id = Math.floor(randomNumber)

    if (this.items.length > 0) {
      this.items.forEach(item => {
        if (item && item.id === id) {
          this.putIdInPizzaModel()
        } else {
          this.pizzaModel.id = id
        }
      })
    } else {
      this.pizzaModel.id = id
    }
  }
}
