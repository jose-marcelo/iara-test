import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { FillingComponent } from './components/filling/filling.component';
import { PastaComponent } from './components/pasta/pasta.component';


@NgModule({
  declarations: [
    MenuComponent,
    FillingComponent,
    PastaComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
