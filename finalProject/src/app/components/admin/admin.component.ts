import { Component, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HTTPModuleService } from 'src/app/services/httpmodule.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private http: HttpClient, private myService: HTTPModuleService){}

  tempId:any;
  freeId:any;

  setIdAndPush(){
    this.myService.getAllProducts().subscribe(res => {
      for (const key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
          const element = res[key];
          console.log(element);
          this.tempId = 300;
          for (const item in element) {
            if (Object.prototype.hasOwnProperty.call(element, item)) {
              const obj = element[item];
              
              console.log('object is');
              console.log(obj);
              
              if(obj){
                if(obj.id == this.tempId){
                  console.log('increasing id!');
                  this.tempId++;
                }
              }
              
            }
          }
          // element.forEach((item: { id: number | undefined; }) => {
          //   if(item){
          //     if(item.id == this.tempId) this.tempId++;
          //   }
          // });
          this.freeId = this.tempId;
          console.log('id is '+this.freeId);
          
          this.myForm.get('id')?.setValue(this.freeId);
          
          
          this.pushProduct();
          console.log(this.myForm.value);

          // this.clearForm();
        }
      }
    })
  }
  
  myForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    category: new FormGroup({
      name: new FormControl('', Validators.required)
    }),
    id: new FormControl(null, Validators.required)
  })


  passwordSequence = ['m', 'r', '.', 'a', 'd', 'm', 'i', 'n'];
  pressedKeys: string[] = [];
  isAdmin = false;

  @HostListener('window:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    const key = event.key.toLowerCase(); 

    if (key === this.passwordSequence[this.pressedKeys.length]) {
      this.pressedKeys.push(key);
      if (this.pressedKeys.length === this.passwordSequence.length) {
        this.isAdmin = true;
      }
    } else {
      this.pressedKeys = [];
    }
  }
  // assignToDB(){
  //   this.myService.assignToMyDB()
  // }


  clearForm(){
    this.myForm.reset();
    }
  
  
  pushProduct(){
    console.log('Form');
    
    console.log(this.myForm.value);
    
    this.http.post(this.myService.ProductsDBArray, this.myForm.value)
              .subscribe(res => {
                console.log(res);
              })
  }
}