import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { AnimationController } from '@ionic/angular';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crt',
  templateUrl: './crt.component.html',
  styleUrls: ['./crt.component.scss'],
  standalone:true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports:[CommonModule]
})
export class CrtComponent  implements OnInit {

  public a = 'Cart';
  public b = '2';
  public c = 'Shipping Address';
  public address = '26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh City'; 
  public humi: any[] = [];
  public subtotal: number = 0;
  public total: number = 0;
  public newAddress: string = ''; 
  public cartItems: any[] = [];

  constructor(
    public router: Router,
    private alert: AlertService,
    private animationCtrl: AnimationController,
    private cartService: CartService
  ) {}

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    if (!root) {
      return null;
    }

    const backdropElement = root.querySelector('ion-backdrop');
    const wrapperElement = root.querySelector('.modal-wrapper');

    if (!backdropElement || !wrapperElement) {
      return null; 
    }

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(backdropElement)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(wrapperElement)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    const enterAnimation = this.enterAnimation(baseEl);
    if (!enterAnimation) {
      return null; 
    }
    return enterAnimation.direction('reverse');
  };

  ngOnInit(): void {
    const cartItems = sessionStorage.getItem('cartItems');
    if (cartItems) {
      this.humi = JSON.parse(cartItems);
      this.cartService.setItems(this.humi); 
    }

    this.updateTotals();

    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('isRefreshing', 'true');
    });

    window.addEventListener('load', () => {
      if (sessionStorage.getItem('isRefreshing') === 'true') {
        sessionStorage.removeItem('cartItems');
        this.humi = [];
        this.cartService.setItems([]); 
        sessionStorage.removeItem('isRefreshing');
        this.updateTotals();
      }
    });
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
  }

  async incrementQuantityById(productId: number): Promise<void> {
    const product = this.humi.find(p => p.id === productId);
    if (product) {
      product.quantity++;
      this.updateTotals();
      this.saveCartItems();

      if (product.quantity === 5) {
        const confirmed = await this.alert.showConfirmAlert('The quantity for this item has reached 5. Would you like to add another item to the cart?');
        if (confirmed) {
          const newProduct = { ...product, id: Date.now(), quantity: 1 }; 
          this.humi.push(newProduct);
          this.updateTotals();
          this.saveCartItems();
        }
      }
    }
  }

  async decrementQuantityById(productId: number): Promise<void> {
    const product = this.humi.find(p => p.id === productId);
    if (product) {
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        const confirmed = await this.alert.showConfirmAlert('Are you sure you want to remove this item from the cart?');
        if (confirmed) {
          this.humi = this.humi.filter(p => p.id !== productId);
        }
      }
      this.updateTotals();
      this.saveCartItems();
    }
  }

  updateTotals(): void {
    this.subtotal = this.humi.reduce((sum, item) => sum + (item.quantity * item.price2), 0);
    this.total = this.subtotal;
  }

  saveCartItems(): void {
    sessionStorage.setItem('cartItems', JSON.stringify(this.humi));
    this.cartService.setItems(this.humi);
  }

  goBack(): void {
    this.router.navigate(['../ten-one']);
  }
  next(price: number): void {
    if (this.humi.length === 0) {
      this.alert.showAlert('Your cart is empty. Please add items before proceeding.');
      return;
    }
  
    const cartData = {
      address: this.newAddress,
      items: this.humi.map(item => ({
        ...item,
        color: item.color,
        size: item.size,
      }))
    };
    sessionStorage.setItem('cartData', JSON.stringify(cartData));
    this.router.navigate(['/payment'], { state: { cartData } });
  }
  

  openModal(): void {
   
  }

  updateAddress(modal: any): void {
    this.address = this.newAddress; 
    modal.dismiss(); 
  }

  checkout(): void {
    
  }

}
