import { Component, OnInit } from '@angular/core';
import { initPizzaModel } from 'src/app/utils/pizza-util';
import { IPizzaModel } from '../../interfaces/pizza';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  step: number = 1
  progress: number = 1

  pizzaModel: IPizzaModel

  constructor() {
    this.pizzaModel = initPizzaModel()
  }

  changeStep(selectedStep: number) {
    this.step = selectedStep
    if (this.progress < this.step) {
      this.progress++
    }
  }

}
