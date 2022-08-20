/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Category } from 'src/app/Interfaces/category.interface';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-form-modal',
  templateUrl: './add-form-modal.component.html',
  styleUrls: ['./add-form-modal.component.scss'],
})
export class AddFormModalComponent implements OnInit {
  name = 'string';
  categories: Category[] = [];
  constructor(private modalCtrl: ModalController, private categoryService: CategoryService) { }
  addItemForm = new FormGroup({
    item_name: new FormControl(''),
    price: new FormControl(''),
    quantity:new FormControl(''),
    category: new FormControl(''),
  });
  ngOnInit() {
    this.getAllCategories();
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((res)=>{
      this.categories = res.data;
    });
  }

}
