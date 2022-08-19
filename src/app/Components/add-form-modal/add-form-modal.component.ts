/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-form-modal',
  templateUrl: './add-form-modal.component.html',
  styleUrls: ['./add-form-modal.component.scss'],
})
export class AddFormModalComponent implements OnInit {
  name = 'string';
  constructor(private modalCtrl: ModalController) { }
  addItemForm = new FormGroup({
    item_name: new FormControl(''),
    price: new FormControl(''),
    quantity:new FormControl(''),
  });
  ngOnInit() {}
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

}
