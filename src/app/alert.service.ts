import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController,   private router: Router) {}
  async showConfirmAlert(message: string): Promise<boolean> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: 'Confirm',
        message,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => resolve(false),
          },
          {
            text: 'Confirm',
            handler: () => resolve(true),
          },
        ],
      });

      await alert.present();
    });
  }

  async showAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Alert',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async showDeleteAlert(productId: number, onDelete: () => void): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            onDelete();
          }
        }
      ]
    });
    await alert.present();
  }
  async confirmAlertAndNavigate(message: string, navigateTo: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'it was ok now best of luck',
      buttons: ['OK']
    });

    await alert.present();
    await alert.onWillDismiss(); 

   
    this.router.navigate([navigateTo]);
  }

  async confirmNavigation(message: string): Promise<boolean> {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => false,
        },
        {
          text: 'OK',
          handler: () => true,
        },
      ],
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
    return role === 'ok';
  }
}
