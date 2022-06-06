import { Component, OnInit } from '@angular/core';
import { IPizzaModel } from '../../interfaces/pizza';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  step: number = 1
  progress: number = 1

  pizzaModel: IPizzaModel = {
    id: 0,
    name: '',
    price: 0,
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeStep(selectedStep: number) {
    this.step = selectedStep
    if (this.progress < this.step) {
      this.progress++
    }
  }

}
