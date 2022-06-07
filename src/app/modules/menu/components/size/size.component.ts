import { Component, Output, EventEmitter, Input } from '@angular/core';
import { initPizzaModel } from 'src/app/utils/pizza-util';
import { ISize, IPizzaModel } from '../../../../interfaces/pizza';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent {

  sizes: ISize[] = [
    {
      id: 1,
      name: 'Broto',
      price: 5
    },
    {
      id: 2,
      name: 'Médio',
      price: 10
    },
    {
      id: 3,
      name: 'Grande',
      price: 15
    },
    {
      id: 4,
      name: 'Extra grande',
      price: 20
    },
  ]

  @Input() pizzaModel: IPizzaModel
  @Output() nextStep = new EventEmitter()

  constructor() {
    this.pizzaModel = initPizzaModel()
  }

  selectSize(size: ISize) {
    this.pizzaModel.size = size
  }

  sizeIsSelected(sizeId: number) {
    return this.pizzaModel.size.id === sizeId
  }

  goNextStep() {
    if (this.pizzaModel.size.id) {
      this.nextStep.emit()
    }
  }

}
