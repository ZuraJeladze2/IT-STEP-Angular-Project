import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AuthApp';
  constructor(private _http: HttpClient){}

  productsDB = 'https://fakestoreapi.com/products/1.json';

  ngOnInit(){
    this.getAllProducts();
  }
    getAllProducts(){
      let productsJson = this._http.get(this.productsDB).subscribe()
      console.log(productsJson);
    }
}