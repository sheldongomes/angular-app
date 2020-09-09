import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}


  addToCart(phones) {
    this.items.push(phones);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}