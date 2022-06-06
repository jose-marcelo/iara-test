import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IPasta } from '../../../../interfaces/pizza';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.scss']
})
export class PastaComponent implements OnInit {

  pastas: IPasta[] = [
    {
      id: 1,
      type: 'Padrão',
      price: 0
    },
    {
      id: 2,
      type: 'Fina',
      price: 0
    },
    {
      id: 3,
      type: 'Integral',
      price: 5
    }
  ]

  @Input() pizzaModel: any
  @Output() nextStep = new EventEmitter()

  pastaSelected: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  selectPasta(pastaId: number) {
    this.pastaSelected = pastaId
  }

  pastaIsSelected(pastaId: number): boolean {
    return this.pastaSelected === pastaId
  }

  goNextStep(){
    if (this.pastaSelected) {
      this.nextStep.emit()
    }
  }
}
