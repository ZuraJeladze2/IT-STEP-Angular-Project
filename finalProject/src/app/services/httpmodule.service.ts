import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HTTPModuleService {
  productsDBurl = 'https://firstdb-e6cd9-default-rtdb.europe-west1.firebasedatabase.app/products.json'
  ProductsDBArray = 'https://firstdb-e6cd9-default-rtdb.europe-west1.firebasedatabase.app/products/-NWw0S4q18wC_VcxNF3v.json'
  categoriesDBurl = 'https://firstdb-e6cd9-default-rtdb.europe-west1.firebasedatabase.app/categories.json'
  myDB:any;
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsDBurl);
  }
  getAllCategories(): Observable<any[]>{
    return this.http.get<any[]>(this.categoriesDBurl);
  }

  assignToMyDB() {
    this.http.get(this.productsDBurl).subscribe(res => {
      console.log(res);
      this.myDB = res;
    });}
}