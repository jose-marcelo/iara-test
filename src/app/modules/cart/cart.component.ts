import { Component, OnInit } from '@angular/core';
import { getIngredientsLabel } from 'src/app/utils/pizza-util';
import { IPizzaModel } from '../../interfaces/pizza';
import { getCartCount, getItemsInLocalStorage } from '../../utils/pizza-util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: IPizzaModel[]
  getIngredientsLabel = getIngredientsLabel

  constructor(
    private router: Router
  ) {
    this.items = []
  }

  ngOnInit(): void {
    this.items = getItemsInLocalStorage()
    this.getTotalPrice()
  }


  getPizzaPrice(pizza: IPizzaModel): number {
    return (pizza.filling.price + pizza.pasta.price + pizza.size.price)
  }

  getTotalPrice(): number {
    let result: number = 0
    this.items.forEach(item => {
      result += this.getPizzaPrice(item)
    });
    return result
  }

  backToMenu() {
    this.router.navigateByUrl('menu')
  }

  deleteItem(index: number) {
    let cartCount = getCartCount()
    cartCount--
    window.localStorage.setItem('cartCount', String(cartCount))

    this.items.splice(index, 1)
    window.localStorage.removeItem(`pizza${index + 1}`)
  }
}
