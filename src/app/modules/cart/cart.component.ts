import { Component, OnInit } from '@angular/core';
import { getIngredientsLabel } from 'src/app/utils/pizza-util';
import { MenuService } from '../../services/menu.service';
import { IPizzaModel } from '../../interfaces/pizza';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: any
  getIngredientsLabel = getIngredientsLabel

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.items = []
    this.getItemsInStorage()
  }

  getItemsInStorage() {
    let getItem
    let count = 0
    while (getItem !== null) {
      count++
      getItem = window.localStorage.getItem(`pizza${count}`)
      if (getItem) {
        this.items.push(JSON.parse(getItem))
      }
    }
    console.log(this.items)
  }

  getPizzaPrice(pizza: IPizzaModel) {
    return (pizza.filling.price + pizza.pasta.price + pizza.size.price).toFixed(2)
  }
}
