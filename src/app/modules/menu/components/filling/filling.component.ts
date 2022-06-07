import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { IFilling } from 'src/app/interfaces/pizza';
import { getIngredientsLabel, initFilling, initPizzaModel } from 'src/app/utils/pizza-util';
import { IPizzaModel } from '../../../../interfaces/pizza';
import { MenuService } from '../../../../services/menu.service';

@Component({
  selector: 'app-filling',
  templateUrl: './filling.component.html',
  styleUrls: ['./filling.component.scss']
})

export class FillingComponent implements OnInit {

  fillings: IFilling[]
  getIngredientsLabel = getIngredientsLabel

  @Input() pizzaModel: IPizzaModel
  @Output() nextStep = new EventEmitter()

  constructor(
    private menuService: MenuService
  ) {
    this.pizzaModel = initPizzaModel()
    this.fillings = [initFilling()]
  }

  ngOnInit() {
    this.menuService.getFillings().then(
      value => { this.fillings = value }
    )
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
}
