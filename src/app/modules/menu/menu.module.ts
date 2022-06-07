import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { FillingComponent } from './components/filling/filling.component';
import { PastaComponent } from './components/pasta/pasta.component';
import { SizeComponent } from './components/size/size.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';


@NgModule({
  declarations: [
    MenuComponent,
    FillingComponent,
    PastaComponent,
    SizeComponent,
    IngredientsComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
