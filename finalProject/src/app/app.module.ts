import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceCategoryComponent } from './components/choice-category/choice-category.component';
import { MonthlySaleComponent } from './components/monthly-sale/monthly-sale.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EasierToChooseComponent } from './components/easier-to-choose/easier-to-choose.component';
import { Only4uComponent } from './components/only4u/only4u.component';
import { OtherCategoriesComponent } from './components/other-categories/other-categories.component';
import { AdminComponent } from './components/admin/admin.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthorisationComponent } from './components/authorisation/authorisation.component';
import { AngularFireModule } from '@angular/fire/compat';
import { RouterLinkActive, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ChoiceCategoryComponent,
    MonthlySaleComponent,
    EasierToChooseComponent,
    Only4uComponent,
    OtherCategoriesComponent,
    AdminComponent,
    MainPageComponent,
    NavbarComponent,
    ProductComponent,
    ProductsComponent,
    AuthorisationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterLinkActive,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCfonsqcXbiSx0c2STLkdC9X_K1G92m_PM',
      authDomain: 'firstdb-e6cd9.firebaseapp.com',
      databaseURL:
        'https://firstdb-e6cd9-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'firstdb-e6cd9',
      storageBucket: 'firstdb-e6cd9.appspot.com',
      messagingSenderId: '577737952037',
      appId: '1:577737952037:web:69a631ba6050d2e79228cc',
      measurementId: 'G-5NSR30KQYH',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
