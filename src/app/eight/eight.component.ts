
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { GlobleService } from '../global.service';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

interface ArItem {
  img: string;
  text5: string;
  price: number;
}
@Component({
  selector: 'app-eight',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.scss'],
  standalone:true,
  imports:[CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class EightComponent  implements OnInit {

  public cartItemCount: number = 0;
  public a!: string;
  public ar: ArItem[] = [];
  private productDetailSubscription: Subscription | undefined;
  constructor(public router: Router,
    private dataService: DataService,
    private globleService: GlobleService,
    private cartService: CartService) { }

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

    ngOnDestroy() {
      // Unsubscribe to prevent memory leaks
      if (this.productDetailSubscription) {
        this.productDetailSubscription.unsubscribe();
      }
    }

}
