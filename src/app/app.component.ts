import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getCartCount } from './utils/pizza-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iara-test';

  constructor(
    private router: Router
  ) {}

  goToCartPage() {
    this.router.navigateByUrl('cart')
  }

  get cartCount() {
    return getCartCount()
  }
}
