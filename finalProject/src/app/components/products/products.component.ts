import { Component } from '@angular/core';
import { HTTPModuleService } from 'src/app/services/httpmodule.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private myService: HTTPModuleService) { }

  fullProductsArray: any[] = [];
  slicedArray:any[] = []
  limit:number = 10;
  buttonShow:boolean = false;

  ngOnInit() {
    this.myService.getAllProducts().subscribe(res => {
      console.log(res)
      for (const key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
          const element = res[key];
          for (const product of element) {
            if (product){
              this.fullProductsArray.push(product)
            }
          }
        }
      }
      console.warn('fullproductsarray');
      
      console.log(this.fullProductsArray);
      this.slicedProducts();
    })
  }

  buttonShowFunc(){
    this.buttonShow = true;
  }
  
  slicedProducts(){
    this.slicedArray = this.fullProductsArray.slice(0, this.limit);
    this.buttonShowFunc()
  }
  

  showMore(){
    this.limit += 10;
    this.slicedProducts();
    console.log(this.limit);
    
  }
  
  
  
}