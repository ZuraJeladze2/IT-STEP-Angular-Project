import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HTTPModuleService } from 'src/app/services/httpmodule.service';

@Component({
  selector: 'app-choice-category',
  templateUrl: './choice-category.component.html',
  styleUrls: ['./choice-category.component.scss']
})
export class ChoiceCategoryComponent {
  constructor(private http:HttpClient, private myService: HTTPModuleService){}

  categoriesArray = [
    {
      title: 'new',
      icon: '../../../assets/categories/new.png'
    },
    {
      title: 'shoes',
      icon: '../../../assets/categories/shoes.jpg'
    },
    {
      title: 'furniture',
      icon: '../../../assets/categories/furniture.png'
    },
    {
      title: 'electronics',
      icon: '../../../assets/categories/laptop.png'
    },
    {
      title: 'others',
      icon: '../../../assets/categories/others.jpg'
    }
  ];

}
