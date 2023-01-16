import { Component, EventEmitter, Output } from '@angular/core';
import * as productData from '../../user.json';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  product = productData;
  @Output() productDetail : EventEmitter<any> = new EventEmitter<any>();
  length = 20;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [2,3,5, 10, 25];
  showFirstLastButtons = true;
  constructor(){
    console.log(this.product.users);
  }
  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }
  passData(product:any){
    this.productDetail.emit(product);
  }

}
