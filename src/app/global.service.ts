import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobleService {
  private cartItems: any[] = [];
  private cardData: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>(this.cartItems);
  private productDetailSubject = new BehaviorSubject<any>(null);
  private selectedCardSubject = new BehaviorSubject<any>(null);

  private shippedProductsSubject = new BehaviorSubject<any[]>(this.getStoredShippedProducts());
  private deliveredProductsSubject = new BehaviorSubject<any[]>(this.getStoredDeliveredProducts());

  shippedProducts$ = this.shippedProductsSubject.asObservable();
  deliveredProducts$ = this.deliveredProductsSubject.asObservable();

  constructor() { }

  setSelectedCard(card: any) {
    this.selectedCardSubject.next(card);
  }

  getSelectedCard() {
    return this.selectedCardSubject.asObservable();
  }

  public ProductDetail = this.productDetailSubject.asObservable();

  addToCart(item: any) {
    this.cartItems.push(item);
    this.cartItemsSubject.next(this.cartItems);
  }

  getCartItems() {
    return this.cartItemsSubject.getValue();
  }

  setProductDetail(product: any) {
    this.productDetailSubject.next(product);
  }

  getProductDetail() {
    return this.productDetailSubject.getValue();
  }

  productFunction(productDetail: any) {
    console.log(productDetail);
    this.productDetailSubject.next(productDetail);
  }

  setCardData(cards: any[]) {
    this.cardData = cards;
  }

  getCardData() {
    return this.cardData;
  }

  updateShippedProducts(products: any[]) {
    this.shippedProductsSubject.next(products);
    this.storeShippedProducts(products);
  }

  updateDeliveredProducts(products: any[]) {
    this.deliveredProductsSubject.next(products);
    this.storeDeliveredProducts(products);
  }

  getShippedProducts() {
    return this.shippedProductsSubject.getValue();
  }

  getDeliveredProducts() {
    return this.deliveredProductsSubject.getValue();
  }

  // Store shipped products in local storage
  private storeShippedProducts(products: any[]) {
    localStorage.setItem('shippedProducts', JSON.stringify(products));
  }

  // Retrieve shipped products from local storage
  private getStoredShippedProducts(): any[] {
    const storedProducts = localStorage.getItem('shippedProducts');
    return storedProducts ? JSON.parse(storedProducts) : [];
  }

  // Store delivered products in local storage
  private storeDeliveredProducts(products: any[]) {
    localStorage.setItem('deliveredProducts', JSON.stringify(products));
  }

  // Retrieve delivered products from local storage
  private getStoredDeliveredProducts(): any[] {
    const storedProducts = localStorage.getItem('deliveredProducts');
    return storedProducts ? JSON.parse(storedProducts) : [];
  }
}
