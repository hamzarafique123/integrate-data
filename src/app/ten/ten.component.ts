import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { GlobleService } from '../global.service';
import { CartService } from '../cart.service';
import { arrowBackOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ten',
  templateUrl: './ten.component.html',
  styleUrls: ['./ten.component.scss'],
  imports:[CommonModule],
  standalone:true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TenComponent  implements OnInit {

  public a = "36 Product Sale";
  public artr: any[] = [];
  public bun: any[] = [];
  public hum: any = {};
  public cartItemCount: number = 0;
  public selectedColor: string = '';
  public selectedSize: string = '';
  public availableSizes: string[] = ['S', 'M', 'L', 'XL'];
  public quantity: number = 1;

  private productDetailSubscription: Subscription | undefined;

  constructor(
    public router: Router,
    private dataService: DataService,
    private globalService: GlobleService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  ionViewWillEnter(): void {
    this.loadData();
  }

  private loadData(): void {
    this.artr = this.dataService.getArtr();
    this.bun = this.dataService.getBun();
    this.updateCartItemCount();

    if (this.productDetailSubscription) {
      this.productDetailSubscription.unsubscribe();
    }

    this.productDetailSubscription = this.globalService.ProductDetail.subscribe((detail) => {
      if (detail) {
        this.hum = detail;
      } else {
        this.router.navigate(['/some-safe-page']);
      }
    });
  }

  updateCartItemCount(): void {
    this.cartItemCount = this.cartService.getItemCount();
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    if (!this.selectedColor || !this.selectedSize) {
      alert('Please select both color and size.');
      return;
    }

    const newItem = {
      id: Date.now(),
      img: this.hum.img,
      text5: this.hum.text5,
      price: this.hum.price,
      quantity: this.quantity,
      color: this.selectedColor,
      size: this.selectedSize,
      text99: 'Subtotal= ',
      price2: this.hum.price,
      fromTenOnePage: true,
    };

    this.cartService.addItem(newItem);
    this.updateCartItemCount();
    this.router.navigate(['/cart']);
  }

  ngOnDestroy() {
    if (this.productDetailSubscription) {
      this.productDetailSubscription.unsubscribe();
    }
  }

  goBack() {
    this.router.navigate(['../eight-one']);
  }

  tum() {
    this.router.navigate(['../cart']);
  }


}
