import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { phones } from '../../phones';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  phones;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.phones = phones[+params.get('productId')];
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(phones);
  }

}
