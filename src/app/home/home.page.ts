/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Item } from '../Interfaces/item.interface';
import { ModalController } from '@ionic/angular';
import { AddFormModalComponent } from '../Components/add-form-modal/add-form-modal.component';
import { ShoppingListService } from '../Services/item.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalCtrl: ModalController, private itemService: ShoppingListService) {}
  items: Item[] = [];


  ngOnInit(){
    this.getAllItems();
  }
  async openModal(){
    console.log("Clicked");
    const modal = await this.modalCtrl.create({component:AddFormModalComponent});
    modal.present();

    const {data, role} = await modal.onWillDismiss();
    if(role === 'confirm'){
      this.itemService.createItem(data).subscribe(()=>{
        this.getAllItems();
      });
    }
  }
  getAllItems(){
    this.itemService.getAllItem().subscribe((res)=>{
      this.items = res.data;
    });
  }
}
