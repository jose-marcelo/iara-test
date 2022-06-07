import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPizzaModel } from 'src/app/interfaces/pizza';
import { IIngredients } from '../../../../interfaces/pizza';
import { Router } from '@angular/router';
import { initPizzaModel } from 'src/app/utils/pizza-util';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredients: IIngredients[] = []

  @Input() pizzaModel: IPizzaModel
  @Output() nextStep = new EventEmitter()


  constructor(
    private router: Router,
    private cartService: CartService
  ) {
    this.pizzaModel = initPizzaModel()
  }

  ngOnInit(): void {
    this.ingredients = this.pizzaModel.filling.ingredients
  }

  goToCartPage() {
    this.cartService.count++

    window.localStorage.setItem(
      `pizza${this.cartService.count}`,
      JSON.stringify(this.pizzaModel)
    )
    window.localStorage.setItem('cartCount', String(this.cartService.count))

    this.router.navigateByUrl('cart')
  }
}
