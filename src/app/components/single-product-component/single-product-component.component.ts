import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-product-component',
  templateUrl: './single-product-component.component.html',
  styleUrls: ['./single-product-component.component.scss']
})
export class SingleProductComponentComponent {
@Input() productDetail: any;
}
