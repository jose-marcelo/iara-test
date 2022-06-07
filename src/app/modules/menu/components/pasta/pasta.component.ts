import { Component, Output, EventEmitter, Input } from '@angular/core';
import { initPizzaModel } from 'src/app/utils/pizza-util';
import { IPasta, IPizzaModel } from '../../../../interfaces/pizza';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.scss']
})
export class PastaComponent {

  pastas: IPasta[] = [
    {
      id: 1,
      name: 'Padrão',
      price: 0
    },
    {
      id: 2,
      name: 'Fina',
      price: 0
    },
    {
      id: 3,
      name: 'Integral',
      price: 5
    }
  ]

  @Input() pizzaModel: IPizzaModel
  @Output() nextStep = new EventEmitter()

  constructor() {
    this.pizzaModel = initPizzaModel()
  }

  selectPasta(pasta: IPasta) {
    this.pizzaModel.pasta = pasta
  }

  pastaIsSelected(pastaId: number): boolean {
    return this.pizzaModel.pasta.id === pastaId
  }

  goNextStep(){
    if (this.pizzaModel.pasta.id) {
      this.nextStep.emit()
    }
  }
}
