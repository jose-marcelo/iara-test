import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { initPizzaModel } from 'src/app/utils/pizza-util';
import { IPasta, IPizzaModel } from '../../../../interfaces/pizza';
import { initPasta } from '../../../../utils/pizza-util';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.scss']
})
export class PastaComponent implements OnInit {

  pastas: IPasta[]

  @Input() pizzaModel: IPizzaModel
  @Output() nextStep = new EventEmitter()

  constructor(
    private menuService: MenuService
  ) {
    this.pizzaModel = initPizzaModel()
    this.pastas = [initPasta()]
  }

  ngOnInit() {
    this.menuService.getPastas().then(
      response => { this.pastas = response }
    )
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
