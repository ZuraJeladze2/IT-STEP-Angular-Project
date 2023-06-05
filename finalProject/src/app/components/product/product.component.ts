import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HTTPModuleService } from 'src/app/services/httpmodule.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private myService: HTTPModuleService, private route: ActivatedRoute){}

  productId: any;
  productsArray:any[] =[];
  product:any;
  
  ngOnInit(){
    this.getProducts()
  }
  
  handleChange(id:any){
    this.product = this.productsArray.find((item:any) => {
      return item.id == id;
    })
    console.log(this.product);
    
  }
  
  getProducts(){
    this.myService.getAllProducts().subscribe(async (res) => {
      for (const key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
          const element = res[key];
          for (const item of element) {
            if(item) this.productsArray.push(item)
          }
          this.productId = this.route.snapshot.paramMap.get('id');
          console.log("productId is "+this.productId);
          console.warn('array:');
          console.log(this.productsArray);
          
          this.product = this.productsArray.find((item:any) => {
            return item.id == this.productId;
            
          })
          
        }
      }
    })
  }
}
