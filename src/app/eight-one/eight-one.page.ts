import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonIcon,IonText,IonList,IonBadge,IonGrid,IonRow,IonCol,IonItem,IonInput,IonButtons } from '@ionic/angular/standalone';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { GlobleService } from '../global.service';
import { CartService } from '../cart.service';
import { EightComponent } from '../eight/eight.component';

interface ArItem {
  img: string;
  text5: string;
  price: number;
}

@Component({
  selector: 'app-eight-one',
  templateUrl: './eight-one.page.html',
  styleUrls: ['./eight-one.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonIcon,IonText,IonList,IonBadge,IonGrid,IonRow,IonCol,IonInput,IonItem,IonButtons,EightComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class EightOnePage implements OnInit {

  public cartItemCount: number = 0;
  public a!: string;
  public ar: ArItem[] = [];
  private productDetailSubscription: Subscription | undefined;

  constructor(
    public router: Router,
    private dataService: DataService,
    private globleService: GlobleService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // Fetch additional data from GlobalService if needed
    this.productDetailSubscription = this.globleService.ProductDetail.subscribe(
      data => {
        if (data) {
          // Handle the product detail data if needed
        } else {
          console.error('No product data found');
          this.router.navigate(['/some-safe-page']);
        }
      },
      error => {
        console.error('Error fetching product details', error);
        this.router.navigate(['/some-safe-page']);
      }
    );

    // Fetch data using DataService
    this.ar = this.dataService.getAr();
    this.a = this.dataService.a;

    this.cartItemCount = this.cartService.getItemCount(); 
  }

  async go(item: ArItem) {
    // Set product detail in GlobalService before navigation
    this.globleService.setProductDetail(item);
    this.router.navigate(['/ten-one']);
  }

  next() {
    this.router.navigate(['/nine-one']);
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.productDetailSubscription) {
      this.productDetailSubscription.unsubscribe();
    }
  }

  goBack() {
    this.router.navigate(['../seven-one']); // Navigate to the previous page
  }
  tum(){
    this.router.navigate(['../cart']);
  }
}



