import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iara-test';

  constructor(
    public cartService: CartService,
    private router: Router
  ) {
    const storageCartCount = window.localStorage.getItem('cartCount')
    this.cartService.count = Number(storageCartCount)
  }

  goToCartPage() {
    this.router.navigateByUrl('cart')
  }
}
