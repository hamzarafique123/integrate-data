import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {
    const savedItems = sessionStorage.getItem('cartItems');
    if (savedItems) {
      this.cartItems = JSON.parse(savedItems);
   }
  }
  getCartItems(): any[] {
    return this.cartItems;
  }

  addItem(item: any): void {
    this.cartItems.push(item);
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  private cardCountSubject = new BehaviorSubject<number>(0);
  cardCount$ = this.cardCountSubject.asObservable();

  setCardCount(count: number): void {
    this.cardCountSubject.next(count);
  }

  getCardCount(): number {
    return this.cardCountSubject.value;
  }
  removeItem(itemToRemove: any): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemToRemove.id);
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  clearCart(): void {
    this.cartItems = [];
    sessionStorage.removeItem('cartItems');
  }
  getItems(): any[] {
    return this.cartItems;
  }

  setItems(items: any[]): void {
    this.cartItems = items;
  }

  

  getItemCount(): number {
    return this.cartItems.length;
  }
}
