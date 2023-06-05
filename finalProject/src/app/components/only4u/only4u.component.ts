import { Component, EventEmitter, Output } from '@angular/core';
import { HTTPModuleService } from "../../services/httpmodule.service";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-only4u',
  templateUrl: './only4u.component.html',
  styleUrls: ['./only4u.component.scss']
})


export class Only4uComponent {
  constructor(private myService: HTTPModuleService, private http: HttpClient, private route:Router){}

  shortProductsArray:any[] = [];
  fullProductsArray: any[] = [];
  updatedProductsArray:any[] = [];


  @Output() productChanged = new EventEmitter<string>();

  handleChange(id:any){
    this.productChanged.emit(id);
  }

  

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  ngOnInit(){
    this.myService.getAllProducts().subscribe(res => {
      for (const key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
          const element = res[key];
          console.log(element);
          // this.fullProductsArray = element;
          // this.shortProductsArray= element.slice(1, 9);
          for (const product of element) {
            if (product) {
              this.fullProductsArray.push(product)
              this.shortProductsArray = this.fullProductsArray.slice(0,10)
            }
          }       
        }
      }
      
    }
    )
  }

  clearRoute(){
    this.route.navigate(['/products'])
  }
  

  productsArrayManipulations(){
    this.updatedProductsArray = this.fullProductsArray.map((element: { category: {name:string} }) => {
      if(element.category.name === 'AZ'){
        element.category.name = 'New';
      }
      console.log(element.category.name)
      return element;
    })
    console.log(this.updatedProductsArray);
    
    this.http.post(this.myService.productsDBurl, this.updatedProductsArray).subscribe(res => console.log(res))
    
    console.log(this.fullProductsArray)
  }




  // deleteProduct(){
  //   this.http.delete('hi').subscribe(res => {
  //     console.log(res);
  //   })
  // }

}
