/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { Item } from '../Interfaces/item.interface';
import { ModalController } from '@ionic/angular';
import { AddFormModalComponent } from '../Components/add-form-modal/add-form-modal.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {}
  items: string[] = ["Hey"];

  async openModal(){
    console.log("Clicked");
    const modal = await this.modalCtrl.create({component:AddFormModalComponent});
    modal.present();

    const {data, role} = await modal.onWillDismiss();
    if(role === 'confirm'){

    }
  }
}
