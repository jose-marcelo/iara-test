import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  step: number = 1
  progress: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  changeStep(selectedStep: number) {
    this.step = selectedStep
    if (this.progress < this.step) {
      this.progress++
    }
  }

  nextStep() {

  }

}
