import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  productDetail: any = null;
  constructor(){

  }
  getData(event:any){
     console.log(event);
  }
}
