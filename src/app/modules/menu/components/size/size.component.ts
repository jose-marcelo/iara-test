import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { initPizzaModel, initSize } from 'src/app/utils/pizza-util';
import { ISize, IPizzaModel } from '../../../../interfaces/pizza';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

  sizes: ISize[]

  @Input() pizzaModel: IPizzaModel
  @Output() nextStep = new EventEmitter()

  constructor(
    private menuService: MenuService
  ) {
    this.pizzaModel = initPizzaModel()
    this.sizes = [initSize()]
  }

  ngOnInit() {
    this.menuService.getSizes().then(
      response => { this.sizes = response }
    )
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
